import Index from "../views/Index";
import Dashboard from "../views/Dashboard";

const indexRoutes = {
    routes: [
        { path: "/dashboard", component: Dashboard },
        { path: "/", component: Index },
    ]};

export default indexRoutes;
