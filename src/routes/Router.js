import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "../Component/pages/home.js"
import Contactus from "../Component/pages/ContactUs.js";
import Login from "../Component/pages/Login.js"


/**** Layouts *****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Monthly = lazy(() => import ("../views/ui/Monthly_Report.js"));
const Contact = lazy(() => import("../views/ui/ContactUs"))

// Separate pages 
/***** Routes *****/
const ThemeRoutes = [
  {
    element: <FullLayout />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/monthly", exact: true, element: <Monthly /> },
      { path: "/Contactus", exact: true, element: <Contact/> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
    ],
  },
  {path: "/",
   children: [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", exact: true, element: <Home /> },
  { path: "/login", exact: true, element: <Login /> },
  { path: "/Contact", exact: true, element: <Contactus /> },
   ],
  },
];

export default ThemeRoutes;
