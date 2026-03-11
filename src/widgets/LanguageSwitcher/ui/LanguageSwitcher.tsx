import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui";
interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(cls.languageSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
}
