import { RouterProvider } from "react-router";
import { router as appRouter } from "./router/app.router";

const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default HeroesApp;
