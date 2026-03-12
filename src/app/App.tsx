import { Outlet } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/Themeprovider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";

export function App() {
  const { theme } = useTheme();

  return (
    <div data-testid="dataTestIdApp" className={classNames("app", {}, [theme])}>
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
