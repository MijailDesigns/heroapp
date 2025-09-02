import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import HeroStatCard from "./HeroStatCard";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../actions/get-summary.action";

const HeroStats = () => {
  const { data: summmary } = useQuery({
    queryKey: ["summary-information"],
    queryFn: () => getSummary(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summmary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summmary?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summmary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favorites"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroStatCard>

      <HeroStatCard
        title="Strongest"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summmary?.strongestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Strength: {summmary?.strongestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summmary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Intelligence: {summmary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  );
};

export default HeroStats;
