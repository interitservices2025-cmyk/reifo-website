export interface Sector {
  id: string;
  slug: string;
  iconName: "sport" | "integration" | "school" | "francophonie" | "social";
  image: string;
  titleKey: string;
  descKey: string;
  activitiesKey: string; // Key path to translations array of activities
  targetKey: string;     // Key path to translation of target public
  ctaLink: string;
  galleryImages: string[];
}

export const sectorsData: Sector[] = [
  {
    id: "sport-sante",
    slug: "sport-sante",
    iconName: "sport",
    image: "/images/reifo/sport/hockey-indoor.jpg",
    titleKey: "sectors.items.sport.title",
    descKey: "sectors.items.sport.desc",
    activitiesKey: "sectors.detail.sport.activities",
    targetKey: "sectors.detail.sport.target",
    ctaLink: "/contact",
    galleryImages: [
      "/images/reifo/sport/hockey-indoor.jpg",
      "/images/reifo/sport/gym-training.jpg",
      "/images/reifo/sport/soccer-match.jpg"
    ]
  },
  {
    id: "integration-immigrants",
    slug: "integration-immigrants",
    iconName: "integration",
    image: "/images/reifo/integration/pique-nique-1.jpg",
    titleKey: "sectors.items.integration.title",
    descKey: "sectors.items.integration.desc",
    activitiesKey: "sectors.detail.integration.activities",
    targetKey: "sectors.detail.integration.target",
    ctaLink: "/contact",
    galleryImages: [
      "/images/reifo/integration/pique-nique-1.jpg",
      "/images/reifo/gallery/pique-nique-2.jpg",
      "/images/reifo/gallery/pique-nique-3.jpg"
    ]
  },
  {
    id: "appui-integration-scolaire",
    slug: "appui-integration-scolaire",
    iconName: "school",
    image: "/images/reifo/scolaire/pique-nique-4.jpg",
    titleKey: "sectors.items.school.title",
    descKey: "sectors.items.school.desc",
    activitiesKey: "sectors.detail.school.activities",
    targetKey: "sectors.detail.school.target",
    ctaLink: "/contact",
    galleryImages: [
      "/images/reifo/scolaire/pique-nique-4.jpg",
      "/images/reifo/gallery/pique-nique-1.jpg",
      "/images/reifo/gallery/pique-nique-2.jpg"
    ]
  },
  {
    id: "promotion-francophonie",
    slug: "promotion-francophonie",
    iconName: "francophonie",
    image: "/images/reifo/francophonie/pique-nique-3.jpg",
    titleKey: "sectors.items.francophonie.title",
    descKey: "sectors.items.francophonie.desc",
    activitiesKey: "sectors.detail.francophonie.activities",
    targetKey: "sectors.detail.francophonie.target",
    ctaLink: "/contact",
    galleryImages: [
      "/images/reifo/francophonie/pique-nique-3.jpg",
      "/images/reifo/gallery/pique-nique-4.jpg",
      "/images/reifo/gallery/pique-nique-1.jpg"
    ]
  },
  {
    id: "volet-social",
    slug: "volet-social",
    iconName: "social",
    image: "/images/reifo/social/pique-nique-2.jpg",
    titleKey: "sectors.items.social.title",
    descKey: "sectors.items.social.desc",
    activitiesKey: "sectors.detail.social.activities",
    targetKey: "sectors.detail.social.target",
    ctaLink: "/contact",
    galleryImages: [
      "/images/reifo/social/pique-nique-2.jpg",
      "/images/reifo/gallery/pique-nique-3.jpg",
      "/images/reifo/gallery/pique-nique-4.jpg"
    ]
  }
];
