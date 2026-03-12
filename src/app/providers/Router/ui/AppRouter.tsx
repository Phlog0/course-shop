import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </div>
    ),
    path: RoutePath.main,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePath.about,
        element: <AboutPage />,
      },
    ],
  },
  {
    element: <NotFoundPage />,
    path: RoutePath.not_found,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
