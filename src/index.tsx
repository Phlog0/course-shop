import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/components/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { About, Shop } from "@/pages";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback="Загрузка About...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback="Загрузка магазина...">
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
