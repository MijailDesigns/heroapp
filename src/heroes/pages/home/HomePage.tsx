import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
// import { useState } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? 6;

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesReponse } = useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Superheroes"
          description="Descubre, explora y administra super heroes y villanos"
        />

        <CustomBreadcrumbs currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  return prev;
                })
              }
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  return prev;
                })
              }
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* mostrar todos los personajes */}
            {heroesReponse && <HeroGrid heroes={heroesReponse.heroes} />}
          </TabsContent>
          <TabsContent value="favorites">
            {/* mostrar todos los personajes favoritos*/}
            <h1>favoritos</h1>
            {heroesReponse && <HeroGrid heroes={heroesReponse.heroes} />}
          </TabsContent>
          <TabsContent value="heroes">
            {/* mostrar todos los personajes heroes */}
            <h1>heroes</h1>
            {heroesReponse && <HeroGrid heroes={heroesReponse.heroes} />}
          </TabsContent>
          <TabsContent value="villains">
            {/* mostrar todos los personajes villanos */}
            <h1>villanos</h1>
            {heroesReponse && <HeroGrid heroes={heroesReponse.heroes} />}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesReponse?.pages ?? 1} />
      </>
    </>
  );
};
