import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "app/providers/Themeprovider";
import { AppRouter } from "app/providers/Router";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
);
