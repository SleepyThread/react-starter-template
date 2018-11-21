import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from "history";
import { Router, Switch} from "react-router-dom";
import { AppRoute } from './routers/AppRoute';
import indexRoutes from "./routers/indexRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./redux/store/Store";

const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.routes.map((prop, key) => {
                    return <AppRoute path={prop.path} component={prop.component} isPrivate={prop.isPrivate} key={key}/>;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();