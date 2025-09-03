import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControl from "./ui/SearchControl";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import { useQuery } from "@tanstack/react-query";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useSearchParams } from "react-router";
import { searchHeroessAction } from "@/heroes/actions/search-heros.action";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";

  const { data: searchedHeroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroessAction({ name }),
    staleTime: 1000 * 60 * 5,
  });

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

      <HeroGrid heroes={searchedHeroes} />
    </>
  );
};

export default SearchPage;
