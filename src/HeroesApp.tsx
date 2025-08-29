import { RouterProvider } from "react-router";
import { router } from "./router/app.router";

const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default HeroesApp;
