export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// это штука интересная, если делаешь роуты через Routes, но я делаю через createBrowserRoutes()
// export const routeConfig: Record<AppRoutes, RouteProps> = {
//   [AppRoutes.MAIN]: {
//     path: RoutePath.main,
//     element: <MainPage />,
//   },
//   [AppRoutes.ABOUT]: {
//     path: RoutePath.about,
//     element: <AboutPage />,
//   },
// };
