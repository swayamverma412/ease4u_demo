import { lazy } from "react";
import { Navigate } from "react-router-dom";

/**** Layouts *****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));

// Separate pages
const Home = lazy(() => import("../Component/pages/home.js"));
const Contactus = lazy(() => import("../Component/pages/ContactUs.js"));
const Login = lazy(() => import("../Component/pages/Login.js"));

/***** Routes *****/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
    ],
  },
  { path: "/login", exact: true, element: <Login /> },
  { path: "/Contact", exact: true, element: <Contactus /> },
  { path: "/home", exact: true, element: <Home /> },
];

export default ThemeRoutes;
