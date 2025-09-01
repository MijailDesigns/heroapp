import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControl from "./ui/SearchControl";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de heroes"
        // breadcrumbs={[
        //   { label: "Home 1", to: "/" },
        //   { label: "Home 2", to: "/" },
        //   { label: "Home 3", to: "/" },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
