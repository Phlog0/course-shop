import "./styles/index.scss";
import { Link, Outlet } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/Themeprovider";
import { AppRoutes, RoutePath } from "shared/routeConfig/routeConfig";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App() {
  const { theme } = useTheme();
  return (
    <div data-testid="dataTestIdApp" className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
