import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "../heroes/pages/home/HomePage";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import AdminLayout from "@/admin/layouts/AdminLayout";
import { lazy } from "react";

// import SearchPage from "@/heroes/pages/search/SearchPage";
// import AdminPage from "@/admin/pages/AdminPage";

// con el lazy (lazy load - carga perezosa) se evita que se cargue componente que aun no se van a usar o que no son necesarios aun
// por ejemplo estando en el home no es necesario que se cargue el Search componente
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
