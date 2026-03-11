import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface AboutProps {
  className?: string;
}

export default function AboutPage({ className }: AboutProps) {
  const { t } = useTranslation("about");
  return <div className={classNames("", {}, [className])}>{t("О сайте")}</div>;
}
