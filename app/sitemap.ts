import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://reifo.ca";
  
  const routes = [
    "",
    "/a-propos",
    "/nos-volets",
    "/sport-sante",
    "/integration-immigrants",
    "/appui-integration-scolaire",
    "/promotion-francophonie",
    "/volet-social",
    "/activites-evenements",
    "/actualites",
    "/galerie",
    "/devenir-membre",
    "/benevolat",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
