import './App.css';
import NavbarHorizontal from './components/NavbarHorizontal';
import NavbarVertical from './components/NavbarVertical';
import Banner from './components/Banner';
import ChartActivity from './components/ChartActivity';
import ChartTime from './components/ChartTime';
import ChartPerformance from './components/ChartPerformance';
import ChartScore from './components/ChartScore';
import SportsKeyData from './components/SportsKeyData';
import React from 'react';
import { getUserActivity, getUserAverageSession, getUserPerformance, getUserData } from './services/services.js';
import { withRouter } from "react-router-dom";
import ErrorComponent from './components/ErrorComponent';


/**
 * App - main component that returns the navigation and the dashboard with all the charts
 */
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      userActivity: "",
      userPerformance: "",
      userAverageSession: "",
      userData: "",
      loading: true,
      error: null
    }
  }
  /**
   * in  this  life cycle we will get id from the router props and use the services to get the data with this id
   */
  componentDidMount() {
    const propsId = this.props.match.params.id;
    const userActivityPromise = getUserActivity(propsId);
    const userPerformancePromise = getUserPerformance(propsId);
    const userAverageSessionPromise = getUserAverageSession(propsId);
    const userDataPromise = getUserData(propsId);

    Promise.all([userDataPromise, userActivityPromise, userPerformancePromise, userAverageSessionPromise]).then((responses) => {
      this.setState({
        ...this.state,
        userData: responses[0],
        userActivity: responses[1],
        userPerformance: responses[2],
        userAverageSession: responses[3],
        error: null,
        loading: false
      })
    }).catch((error) => {
      this.setState({
        ...this.state,
        loading: false,
        error: error
      })
    })
  }
// 
/**
 * it can render One of three things : loading state or error page or html with the charts
 * @returns {JSX.Element}
 */
  render() {

    if (this.state.loading) {
      return <div>chargement en cours...</div>
    } else if (this.state.error) {
      return <ErrorComponent error={this.state.error} />
    } else {
      return (
        <div className="App">
          <header>
            <NavbarHorizontal />
          </header>
          <main>
            <nav>
              <NavbarVertical />
            </nav>
            <div className='center-wrapper'>
              <Banner name={this.state.userData.userInfos.firstName} />
              <div className='dashboard-container'>
                <div className='chartWrapperColumn'>
                  <div className='chartWrapperOne'>
                    <ChartActivity data={this.state.userActivity} />
                  </div>
                  <div className='chartWrapperTwo'>
                    <ChartTime data={this.state.userAverageSession} />
                    <ChartPerformance data={this.state.userPerformance} />
                    <ChartScore data={this.state.userData.todayScore || this.state.userData.score} />
                  </div>
                </div>
                <div className='sportsKeyDataWrapper'>
                  <SportsKeyData data={this.state.userData.keyData} />
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  }
}
export default withRouter(App);
