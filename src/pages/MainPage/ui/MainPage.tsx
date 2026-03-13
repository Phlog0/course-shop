import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div data-testid="mainPage">
      <h2>{t("Главная страница")}</h2>

      <BugButton />
    </div>
  );
}
