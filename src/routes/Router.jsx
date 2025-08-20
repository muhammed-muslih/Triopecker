import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import {
  Home,
  About,
  Services,
  TechnologySolutions,
  AdvertisingMarketing,
  SingleService,
} from "../pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      {
        path: "/services/technology-solutions",
        element: <TechnologySolutions />,
      },
      {
        path: "/services/advertising-marketing",
        element: <AdvertisingMarketing />,
      },
      {
        path: "/services/:slug",
        element: <SingleService />,
      },
    ],
  },
]);
export default appRouter;
