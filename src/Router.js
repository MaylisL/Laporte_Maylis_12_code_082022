
import App from './App';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/dashboard/12" />
                </Route>
                <Route path="/dashboard/:id">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
