import { describe, expect, expectTypeOf, test } from "vitest";
import { getHero } from "./get-hero.action";
import type { Hero } from "../types/hero.interface";
import { AxiosError } from "axios";

describe("getHeroAction", () => {
  test("should fetch hero data and return with complete image url", async () => {
    const hero = await getHero("clark-kent");
    expect(hero).toStrictEqual({
      id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
      alias: expect.any(String),
      powers: [
        "Súper fuerza",
        "Vuelo",
        "Visión de calor",
        "Visión de rayos X",
        "Invulnerabilidad",
        "Súper velocidad",
      ],
      description:
        "El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.",
      strength: 10,
      intelligence: 8,
      speed: 9,
      durability: 10,
      team: "Liga de la Justicia",
      image: "http://localhost:3001/images/1.jpeg",
      firstAppearance: "1938",
      status: "Active",
      category: "Hero",
      universe: "DC",
    });
    expectTypeOf(hero).toEqualTypeOf<Hero>();
    expect(hero.image).toContain("http");
  });

  test("should throw an error if hero is not found", async () => {
    expect(getHero("clark-kent2")).rejects.throw(AxiosError);

    const result = await getHero("clark-kent2").catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toBe("Request failed with status code 404");
    });

    expect(result).toBeUndefined();
  });
});
