import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps) {
  const { t } = useTranslation();
  const realodPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <span>{t("Произошла непредвиденная ошибка")}</span>

      <Button onClick={realodPage}>{t("Обновить старницу")}</Button>
    </div>
  );
}
