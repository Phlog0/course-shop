import { App } from "app/App";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePath } from "shared/routeConfig/routeConfig";

let router = createBrowserRouter([
  {
    element: <App />,
    path: RoutePath.main,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Загрузка главной страницы...">
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: RoutePath.about,
        element: (
          <Suspense fallback="Загрузка about...">
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
