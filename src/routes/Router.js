import { lazy } from "react";
import { Navigate } from "react-router-dom";

/**** Layouts *****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter"));
const About = lazy(() => import("../views/About"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Monthly = lazy(() => import("../views/ui/Monthly_Report"));
const Contact = lazy(() => import("../views/ui/ContactUs"));

// Separate pages
const Home = lazy(() => import("../Component/pages/home"));
const ContactUsPage = lazy(() => import("../Component/pages/ContactUs"));
const LoginPage = lazy(() => import("../Component/pages/Login"));

/***** Routes *****/
const ThemeRoutes = [
  {
    element: <FullLayout />,
    children: [
      { path: "/starter", element: <Starter /> },
      { path: "/monthly", element: <Monthly /> },
      { path: "/contactus", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/cards", element: <Cards /> },
      { path: "/table", element: <Tables /> },
      { path: "/forms", element: <Forms /> },
    ],
  },
  {
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/contact", element: <ContactUsPage /> },
    ],
  },
];

export default ThemeRoutes;
