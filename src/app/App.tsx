import "./styles/index.scss";
import { Outlet } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/Themeprovider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { Suspense } from "react";

export function App() {
  const { theme } = useTheme();
  return (
    <div data-testid="dataTestIdApp" className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
