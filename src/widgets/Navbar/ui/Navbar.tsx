import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";
interface NavbarProps {
  className?: string;
}
export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.mainLink}
        >
          About
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          main
        </AppLink>
      </div>
    </nav>
  );
}
