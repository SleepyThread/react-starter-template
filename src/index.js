import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import indexRoutes from "./routers/indexRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            { indexRoutes.routes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key}  />;
            })}
        </Switch>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();