export interface GalleryItem {
  id: string;
  src: string;
  alt: { fr: string; en: string };
  title: { fr: string; en: string };
  category: "sport" | "education" | "activities" | "events" | "community";
}

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    src: "/images/reifo/gallery/pique-nique-1.jpg",
    alt: { fr: "Pique-nique de la communauté REIFO en Ontario", en: "REIFO community picnic in Ontario" },
    title: { fr: "Pique-nique communautaire", en: "Community Picnic" },
    category: "community"
  },
  {
    id: "g-2",
    src: "/images/reifo/gallery/hockey-indoor.jpg",
    alt: { fr: "Jeunes jouant au hockey en intérieur", en: "Youth playing indoor hockey" },
    title: { fr: "Hockey en salle", en: "Indoor Hockey" },
    category: "sport"
  },
  {
    id: "g-3",
    src: "/images/reifo/gallery/pique-nique-2.jpg",
    alt: { fr: "Partage de nourriture lors du pique-nique", en: "Food sharing at the picnic" },
    title: { fr: "Repas et partage convivial", en: "Shared Festive Meal" },
    category: "community"
  },
  {
    id: "g-4",
    src: "/images/reifo/gallery/pique-nique-3.jpg",
    alt: { fr: "Familles réunies sous l'ombre d'un chêne", en: "Families gathered under an oak tree's shadow" },
    title: { fr: "Échanges sous les arbres", en: "Conversations under the trees" },
    category: "community"
  },
  {
    id: "g-5",
    src: "/images/reifo/gallery/pique-nique-4.jpg",
    alt: { fr: "Activités de plein air au parc de Milton", en: "Outdoor activities in Milton Park" },
    title: { fr: "Jeux extérieurs en famille", en: "Outdoor Family Games" },
    category: "community"
  },
  {
    id: "g-6",
    src: "/images/reifo/gallery/gym-training.jpg",
    alt: { fr: "Séance d'étirements et entraînement en gymnase", en: "Stretching and fitness session in the gym" },
    title: { fr: "Entraînement physique et bien-être", en: "Fitness & Well-being Session" },
    category: "sport"
  },
  {
    id: "g-7",
    src: "/images/reifo/gallery/soccer-match.jpg",
    alt: { fr: "Match de soccer communautaire en plein air", en: "Outdoor community soccer match" },
    title: { fr: "Match de soccer de la diversité", en: "Diversity Soccer Match" },
    category: "sport"
  }
];
