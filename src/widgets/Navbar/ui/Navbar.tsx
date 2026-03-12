import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}
export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.mainLink}
        >
          {t("О сайте")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          {t("Главная страница")}
        </AppLink>
      </div>
    </nav>
  );
}
