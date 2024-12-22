import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import ExplorePage from "./pages/explore/explore.page.tsx";
import { AllScreenRoutes, AllWidgetRoutes } from "./routes/sidebar-routes.ts";
import GettingStartedPage from "./pages/explore/sidebar-menu/getting-started/getting-started.page.tsx";
import AllScreenPage from "./pages/explore/sidebar-menu/all-screens/all-screens.page.tsx";
import AllWidgetPage from "./pages/explore/sidebar-menu/all-widgets/all-widgets.page.tsx";
import TemplatesPage from "./pages/explore/sidebar-menu/templates/templates.page.tsx";

const screenRoutesArr = AllScreenRoutes.map((data) => ({
  path: `/screens${data.path}`,
  element: <data.component />,
}));

const widgetRoutesArr = AllWidgetRoutes.map((data) => ({
  path: `/widgets${data.path}`,
  element: <data.component />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
    children: [
      {
        path: "/explore/getting-started",
        element: <GettingStartedPage />,
      },
      {
        path: "/explore/templates",
        element: <TemplatesPage />,
      },
      {
        path: "/explore/all-screens",
        element: <AllScreenPage />,
      },
      {
        path: "/explore/all-widgets",
        element: <AllWidgetPage />,
      },
    ],
  },

  {
    path: "/screens",
    element: <ExplorePage />,
    children: screenRoutesArr,
  },
  {
    path: "/widgets",
    element: <ExplorePage />,
    children: widgetRoutesArr,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
