/**
 * REIFO - Données Temporaires d'Événements
 * Ce fichier sert de base de données locale provisioire.
 * Ces données seront connectées à l'API du CMS lors de la Phase 2.
 */

export interface Event {
  id: string;
  slug: string;
  category: { fr: string; en: string };
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  date: { fr: string; en: string };
  time: string;
  location: { fr: string; en: string };
  image: string;
  isUpcoming: boolean;
}

export const eventsData: Event[] = [
  {
    id: "evt-1",
    slug: "tournoi-soccer-diversite",
    category: { fr: "Sport & Santé", en: "Sport & Health" },
    title: {
      fr: "Tournoi de Soccer de la Diversité",
      en: "Diversity Soccer Tournament"
    },
    description: {
      fr: "Rejoignez-nous pour une journée sportive sous le signe du multiculturalisme et du partage. Événement gratuit ouvert à tous les jeunes et familles de Halton.",
      en: "Join us for a sporting day filled with multiculturalism and sharing. Free event open to all Halton youth and families."
    },
    date: { fr: "Samedi, 12 Septembre 2026", en: "Saturday, September 12, 2026" },
    time: "10:00 - 16:00",
    location: { fr: "Parc Communautaire de Milton, ON", en: "Milton Community Park, ON" },
    image: "/images/reifo/events/soccer-match.jpg",
    isUpcoming: true
  },
  {
    id: "evt-2",
    slug: "atelier-integration-logement",
    category: { fr: "Intégration", en: "Integration" },
    title: {
      fr: "Atelier d'Intégration & Aide au Logement",
      en: "Integration & Housing Support Workshop"
    },
    description: {
      fr: "Un atelier pratique animé par des experts pour comprendre le marché du logement en Ontario, préparer ses dossiers de location et connaître ses droits de locataire.",
      en: "A hands-on workshop led by experts to understand Ontario's housing market, prepare rental applications, and learn your tenant rights."
    },
    date: { fr: "Jeudi, 24 Septembre 2026", en: "Thursday, September 24, 2026" },
    time: "18:30 - 20:30",
    location: { fr: "Centre Civique de Milton (Salle A), ON", en: "Milton Civic Centre (Room A), ON" },
    image: "/images/reifo/events/pique-nique-3.jpg",
    isUpcoming: true
  },
  {
    id: "evt-3",
    slug: "celebration-automne-familles",
    category: { fr: "Volet Social", en: "Social Support" },
    title: {
      fr: "Célébration d'Automne des Familles",
      en: "Family Autumn Celebration"
    },
    description: {
      fr: "Une rencontre conviviale pour accueillir les nouvelles familles arrivantes. Jeux pour enfants, partages culinaires multiculturels et réseautage communautaire.",
      en: "A friendly gathering to welcome newly arrived families. Kids' games, multicultural food sharing, and community networking."
    },
    date: { fr: "Samedi, 10 Octobre 2026", en: "Saturday, October 10, 2026" },
    time: "14:00 - 18:00",
    location: { fr: "335 English Mill Court, Milton, ON", en: "335 English Mill Court, Milton, ON" },
    image: "/images/reifo/events/pique-nique-1.jpg",
    isUpcoming: true
  },
  // Événements passés (placeholders)
  {
    id: "evt-4",
    slug: "fete-multiculturelle-ete",
    category: { fr: "Volet Social", en: "Social Support" },
    title: {
      fr: "Fête Multiculturelle de l'Été",
      en: "Summer Multicultural Festival"
    },
    description: {
      fr: "Retour en images sur notre grand pique-nique d'été réunissant plus de 150 personnes autour de musiques traditionnelles et de plats de tous horizons.",
      en: "A look back at our summer picnic gathering over 150 people around traditional music and dishes from all backgrounds."
    },
    date: { fr: "Samedi, 11 Juillet 2026", en: "Saturday, July 11, 2026" },
    time: "12:00 - 19:00",
    location: { fr: "Parc des Sports de Milton, ON", en: "Milton Sports Park, ON" },
    image: "/images/reifo/events/pique-nique-2.jpg",
    isUpcoming: false
  },
  {
    id: "evt-5",
    slug: "camp-basket-jeunesse",
    category: { fr: "Sport & Santé", en: "Sport & Health" },
    title: {
      fr: "Camp de Hockey en Salle",
      en: "Youth Indoor Hockey Camp"
    },
    description: {
      fr: "Une semaine d'entraînement et d'initiation au hockey d'intérieur pour les jeunes francophones, animée par des entraîneurs bénévoles.",
      en: "A week of training and indoor hockey initiation for francophone youth, led by volunteer coaches."
    },
    date: { fr: "Du 3 au 7 Août 2026", en: "August 3 to 7, 2026" },
    time: "09:00 - 12:00",
    location: { fr: "Gymnase École Secondaire Milton, ON", en: "Milton High School Gym, ON" },
    image: "/images/reifo/events/hockey-indoor.jpg",
    isUpcoming: false
  }
];
