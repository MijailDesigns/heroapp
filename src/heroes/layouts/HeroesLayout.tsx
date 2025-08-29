import { Outlet } from "react-router";

const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      <Outlet />
    </div>
  );
};

export default HeroesLayout;
