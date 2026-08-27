/**
 * REIFO - Données Temporaires d'Actualités (Blog)
 * Ce fichier sert de base de données locale provisioire.
 * Ces données seront connectées à l'API du CMS lors de la Phase 2.
 */

export interface Article {
  id: string;
  slug: string;
  category: { fr: string; en: string };
  date: { fr: string; en: string };
  readTime: { fr: string; en: string };
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string; en: string };
  image: string;
}

export const newsData: Article[] = [
  {
    id: "art-1",
    slug: "recherche-logement-guide-immigrants",
    category: { fr: "Guide Pratique", en: "Practical Guide" },
    date: { fr: "20 Août 2026", en: "August 20, 2026" },
    readTime: { fr: "5 min de lecture", en: "5 min read" },
    title: {
      fr: "Comment trouver son premier logement en Ontario : Le guide complet",
      en: "How to find your first housing in Ontario: The complete guide"
    },
    excerpt: {
      fr: "Rechercher un logement en tant que nouvel arrivant peut être intimidant. Découvrez nos conseils pour constituer votre dossier et éviter les pièges.",
      en: "Searching for housing as a newcomer can be intimidating. Discover our tips to build your rental file and avoid pitfalls."
    },
    content: {
      fr: `
        <p>L'accès à un logement stable et abordable est la première étape d'une intégration réussie pour tout immigrant s'établissant en Ontario. Cependant, le marché locatif canadien possède ses propres règles et codes qui peuvent surprendre au début.</p>
        
        <h3>1. Préparer son dossier de location</h3>
        <p>En Ontario, les propriétaires demandent généralement plusieurs documents pour évaluer votre candidature :</p>
        <ul>
          <li><strong>Une preuve de revenus ou d'emploi :</strong> Lettre d'embauche ou fiches de paie. Si vous n'avez pas encore d'emploi, un relevé de compte bancaire montrant des fonds suffisants peut aider.</li>
          <li><strong>Un rapport de crédit :</strong> C'est la bête noire des nouveaux arrivants. N'ayant pas encore d'historique de crédit au Canada, vous pouvez proposer d'avoir un garant (une personne résidant au Canada qui se porte caution pour vous) ou fournir des références de vos anciens propriétaires à l'étranger.</li>
          <li><strong>Une pièce d'identité :</strong> Permis de conduire, passeport ou document de confirmation de résidence permanente.</li>
        </ul>

        <h3>2. Comprendre les coûts</h3>
        <p>En Ontario, le loyer n'inclut pas toujours les charges de services publics (électricité, eau, chauffage, internet). Lors de la signature du bail, vous devrez généralement payer le premier et le dernier mois de loyer à l'avance.</p>
        
        <h3>3. L'accompagnement du REIFO</h3>
        <p>Le REIFO propose un service d'accompagnement personnalisé pour les nouveaux arrivants francophones dans la région de Halton. Nous vous aidons à traduire vos documents, à cibler les quartiers familiaux et à entrer en contact avec des propriétaires ouverts à la diversité.</p>
      `,
      en: `
        <p>Access to stable and affordable housing is the first step toward a successful integration for any immigrant settling in Ontario. However, the Canadian rental market has its own rules and standards that may surprise you at first.</p>
        
        <h3>1. Preparing your rental application</h3>
        <p>In Ontario, landlords typically ask for several documents to evaluate your candidacy:</p>
        <ul>
          <li><strong>Proof of income or employment:</strong> Job offer letter or pay stubs. If you don't have a job yet, a bank statement showing sufficient funds can help.</li>
          <li><strong>A credit report:</strong> This is a common challenge for newcomers. Having no credit history in Canada yet, you can propose a co-signer (a Canadian resident who guarantees your rent) or provide references from past landlords abroad.</li>
          <li><strong>An identity document:</strong> Driver's license, passport, or permanent residency confirmation document.</li>
        </ul>

        <h3>2. Understanding the costs</h3>
        <p>In Ontario, rent does not always include utility costs (electricity, water, heating, internet). When signing the lease, you will typically need to pay the first and last month's rent in advance.</p>
        
        <h3>3. REIFO's Support</h3>
        <p>REIFO offers personalized support services for French-speaking newcomers in the Halton region. We help you translate your documents, target family-friendly neighborhoods, and connect with landlords open to diversity.</p>
      `
    },
    image: "/images/reifo/gallery/pique-nique-1.jpg"
  },
  {
    id: "art-2",
    slug: "succes-tournoi-soccer-diversity-2026",
    category: { fr: "Vie Communautaire", en: "Community Life" },
    date: { fr: "15 Juillet 2026", en: "July 15, 2026" },
    readTime: { fr: "3 min de lecture", en: "3 min read" },
    title: {
      fr: "Retour sur le succès du Tournoi de Soccer de la Diversité 2026",
      en: "Looking back at the success of the 2026 Diversity Soccer Tournament"
    },
    excerpt: {
      fr: "Cette année encore, notre tournoi annuel a rassemblé des dizaines de jeunes de toutes origines autour des valeurs de sportivité, d'entraide et d'inclusion.",
      en: "Once again this year, our annual tournament gathered dozens of youth from all backgrounds around sportsmanship, mutual aid, and inclusion values."
    },
    content: {
      fr: `
        <p>Le week-end dernier s'est tenu notre très attendu Tournoi de Soccer de la Diversité au parc communautaire de Milton. Cet événement annuel majeur, organisé par le REIFO, a tenu toutes ses promesses en réunissant plus de 100 jeunes joueurs et leurs familles dans une ambiance festive et interculturelle.</p>
        
        <h3>Le sport comme vecteur d'intégration</h3>
        <p>Le sport est un langage universel. Pour les jeunes nouveaux arrivants, courir sur un terrain de soccer aux côtés de jeunes établis de longue date en Ontario permet de briser les barrières linguistiques et culturelles en un clin d'œil. C'est l'occasion idéale de créer des amitiés fortes et de renforcer l'estime de soi.</p>

        <h3>Des partenaires engagés</h3>
        <p>Nous tenons à remercier chaleureusement la municipalité de Milton ainsi que nos bénévoles dévoués qui ont assuré la logistique, l'arbitrage et la distribution de collations saines tout au long de la journée. Félicitations à toutes les équipes participantes pour leur fair-play exemplaire !</p>
      `,
      en: `
        <p>Last weekend, our highly anticipated Diversity Soccer Tournament took place at Milton Community Park. This major annual event, organized by REIFO, delivered on all its promises by gathering over 100 young players and their families in a festive, cross-cultural atmosphere.</p>
        
        <h3>Sport as an Integration Vector</h3>
        <p>Sport is a universal language. For young newcomers, running on a soccer field alongside youth long established in Ontario helps break language and cultural barriers in a heartbeat. It is the perfect opportunity to build strong friendships and boost self-esteem.</p>

        <h3>Committed Partners</h3>
        <p>We would like to warmly thank the Town of Milton and our dedicated volunteers who handled logistics, refereeing, and healthy snack distribution throughout the day. Congratulations to all participating teams for their exemplary fair play!</p>
      `
    },
    image: "/images/reifo/gallery/soccer-match.jpg"
  },
  {
    id: "art-3",
    slug: "rentree-scolaire-preparer-enfants-ontario",
    category: { fr: "Éducation", en: "Education" },
    date: { fr: "05 Septembre 2026", en: "September 5, 2026" },
    readTime: { fr: "4 min de lecture", en: "4 min read" },
    title: {
      fr: "Rentrée scolaire en Ontario : Comment préparer au mieux vos enfants",
      en: "Back to school in Ontario: How to best prepare your children"
    },
    excerpt: {
      fr: "Le système scolaire ontarien a ses particularités. Retrouvez nos conseils pratiques et notre calendrier d'aide aux devoirs pour une année réussie.",
      en: "Ontario's school system has its specificities. Read our practical advice and homework help calendar for a successful school year."
    },
    content: {
      fr: `
        <p>La rentrée scolaire est une période d'excitation mais aussi d'appréhension, d'autant plus pour les familles immigrantes qui découvrent le système éducatif de l'Ontario. Qu'il s'agisse des conseils scolaires de langue française ou anglophone, voici les clés pour bien démarrer l'année.</p>
        
        <h3>Comprendre le système d'évaluation et d'accompagnement</h3>
        <p>En Ontario, l'accent est mis sur le développement global de l'élève. Outre les notes académiques, les bulletins évaluent les habiletés d'apprentissage et les habitudes de travail comme l'autonomie, l'esprit de collaboration et le sens de l'organisation.</p>

        <h3>Le programme de soutien scolaire du REIFO</h3>
        <p>Pour accompagner les élèves francophones et leurs parents, le REIFO propose des séances gratuites d'aide aux devoirs et de tutorat après l'école. Nos tuteurs bénévoles aident non seulement à la compréhension des matières scolaires (mathématiques, sciences, anglais), mais guident aussi les parents dans la communication avec les enseignants.</p>
      `,
      en: `
        <p>Back to school is an exciting but also nervous time, especially for immigrant families discovering Ontario's educational system. Whether dealing with French-language or English-language school boards, here are the keys to a successful start.</p>
        
        <h3>Understanding the Assessment and Support System</h3>
        <p>In Ontario, the focus is on the student's overall development. In addition to academic grades, report cards evaluate learning skills and work habits such as independence, collaboration, and organization skills.</p>

        <h3>REIFO's School Support Program</h3>
        <p>To assist francophone students and their parents, REIFO offers free after-school homework help and tutoring sessions. Our volunteer tutors help not only with academic subjects (math, science, English) but also guide parents in communicating with teachers.</p>
      `
    },
    image: "/images/reifo/gallery/pique-nique-4.jpg"
  }
];
