import { matchRoutes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { appRoutes } from "@/app-routes";

describe("App routing", () => {
  it("matches the home page and known pages", () => {
    expect(matchRoutes(appRoutes, "/")?.at(-1)?.route.index).toBe(true);

    for (const path of [
      "/about",
      "/academy",
      "/book",
      "/booking-policy",
      "/coaches",
      "/contact",
      "/events",
      "/founder",
      "/gallery",
      "/leadership",
      "/media",
      "/mission",
      "/privacy",
      "/register",
      "/stadium",
      "/terms",
    ]) {
      expect(matchRoutes(appRoutes, path)?.at(-1)?.route.path).toBe(path.slice(1));
    }
  });

  it("renders the not-found route for unknown pages", () => {
    expect(matchRoutes(appRoutes, "/not-a-page")?.at(-1)?.route.path).toBe("*");
  });
});
