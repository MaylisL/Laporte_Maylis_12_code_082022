import './App.css';
import NavbarHorizontal from './components/NavbarHorizontal';
import NavbarVertical from './components/NavbarVertical';
import Banner from './components/Banner';
import ChartActivity from './components/ChartActivity';
import ChartTime from './components/ChartTime';
import ChartPerformance from './components/ChartPerformance';
import ChartScore from './components/ChartScore';
import SportsKeyData from './components/SportsKeyData';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarHorizontal/>
      </header>
      <main>
        <nav>
          <NavbarVertical/>
        </nav>
        <Banner/>
        <div className='dashboard-container'>
          <ChartActivity/>
          <ChartTime/>
          <ChartPerformance/>
          <ChartScore/>
          <SportsKeyData/>
        </div>
      </main>
    </div>
  );
}

export default App;
