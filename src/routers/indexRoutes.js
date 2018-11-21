import Index from "../views/Index";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

const indexRoutes = {
    routes: [
        { path: "/login", component: Login, isPrivate: false },
        { path: "/dashboard", component: Dashboard, isPrivate: true },
        { path: "/", component: Index, isPrivate: false },
    ]};

export default indexRoutes;
