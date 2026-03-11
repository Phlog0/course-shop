import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "shared/config/i18n/i18n";
import { ThemeProvider } from "app/providers/Themeprovider";
import { AppRouter } from "app/providers/Router";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
);
