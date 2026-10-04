import { business } from "./business";

export const locales = ["en", "fr", "nl"];
export const defaultLocale = "fr";

const baseNav = [
  { key: "home", href: "" },
  { key: "portfolio", href: "/portfolio" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

const siteContent = {
  "en": {
    "meta": {
      "title": "Pickles Studio",
      "description": "Website creation, UX/UI design and application development for businesses in Montpellier. Pickles Studio supports your project from strategy to launch."
    },
    "navigation": {
      "menu": "Menu",
      "close": "Close",
      "home": "Home",
      "portfolio": "Portfolio",
      "services": "Services",
      "about": "About",
      "contact": "Contact",
      "work": "Work"
    },
    "common": {
      "cities": "Montpellier · France · International",
      "discover": "Discover the case study",
      "liveSite": "Visit the client website",
      "backToPortfolio": "Back to portfolio"
    },
    "hero": {
      "kicker": "Web design & digital products",
      "sub": "Websites, design and applications for businesses in Montpellier and beyond.",
      "headline": "We turn your ideas into clear, distinctive websites and digital products, from strategy to launch.",
      "ctaPrimary": "Start a project",
      "ctaSecondary": "View our work"
    },
    "home": {
      "workTitle": "Selected Work",
      "workIntro": "A curated selection of digital products, launches and premium interfaces designed to move businesses forward.",
      "servicesTitle": "Our Services",
      "clientsTitle": "Selected Clients",
      "clientsIntro": "We partner with teams that need product thinking, strong execution and sharp design decisions.",
      "followTitle": "Follow Us",
      "followMarquee": "FOLLOW US-"
    },
    "servicesPage": {
      "eyebrow": "Services",
      "title": "From strategy to launch, we build products with taste and traction.",
      "intro": "Website creation, UX/UI design and web or mobile application development: Pickles Studio helps businesses in Montpellier and beyond define and build their digital presence.",
      "cta": "Let’s discuss your project"
    },
    "aboutPage": {
      "eyebrow": "About",
      "title": "A small premium agency built for ambitious digital work.",
      "intro": "Pickles Studio operates at the intersection of product strategy, design systems and shipping-ready execution. We work closely with founders and teams that want sharper decisions, stronger digital presence and fewer layers between idea and delivery.",
      "story": "Our approach is direct: understand your goals, define priorities and collaborate throughout the project. We connect content, interface design and development so that every decision serves the experience.",
      "principles": [
        "Product clarity before production noise.",
        "Design that feels deliberate, not decorative.",
        "Execution that respects both speed and quality."
      ],
      "blocks": [
        {
          "title": "How we work",
          "body": "We define the problem, frame the opportunity, shape the product direction and build the experience in tight collaboration with stakeholders."
        },
        {
          "title": "What we bring",
          "body": "Product strategy, UX/UI design, premium websites, web applications and hands-on technical problem solving."
        },
        {
          "title": "Who we work with",
          "body": "We support founders, brands and teams in Montpellier, across France and internationally. Projects can be coordinated remotely through direct communication and regular reviews."
        }
      ]
    },
    "contactPage": {
      "eyebrow": "Contact",
      "title": "Let’s discuss the product, platform or launch you need next.",
      "intro": "Whether you need a premium website, a sharper product direction or a partner to ship a new experience, we can start with a focused conversation.",
      "cta": business.email,
      "phoneLabel": "WhatsApp",
      "emailLabel": "Email",
      "socialLabel": "Follow us",
      "availability": "Tell us about your goals, timeline and project. Contact us by email or WhatsApp to start the conversation.",
      "locationLabel": "Service area",
      "location": "Montpellier, France and international projects delivered remotely."
    },
    "portfolioPage": {
      "eyebrow": "Portfolio",
      "title": "Selected work shaped through product, design and engineering.",
      "intro": "Six selected projects covering websites, web platforms and mobile applications, with the challenge, solution and delivered features for each project.",
      "stats": [
        {
          "value": "6",
          "label": "Selected projects"
        },
        {
          "value": "3",
          "label": "Strategy, design & development"
        }
      ]
    },
    "projectPage": {
      "overview": "Overview",
      "challenge": "Challenge",
      "solution": "Solution",
      "impact": "Impact",
      "services": "Services",
      "year": "Year",
      "client": "Client",
      "type": "Type",
      "gallery": "Gallery"
    },
    "contactBlock": {
      "title": "Contact Us",
      "sitemap": "Sitemap",
      "contact": "Contact details",
      "follow": "Follow us"
    },
    "legal": {
      "updated": "Last updated: 4 October 2026",
      "privacy": {
        "title": "Privacy policy",
        "intro": "This page explains how personal information is used when you visit the Pickles Studio website or contact us about a project.",
        "sections": [
          {
            "title": "Contact",
            "body": `For questions about your personal data, write to ${business.email}. The studio supports digital projects for businesses in Montpellier, France and internationally.`
          },
          {
            "title": "Browsing the website",
            "body": "The website has no contact form, account system or advertising or audience measurement trackers. The hosting infrastructure receives the technical information needed to deliver pages and maintain security, including your IP address and request details."
          },
          {
            "title": "Contacting the studio",
            "body": "Email and WhatsApp links open the relevant application or service. If you contact us, we receive the information you choose to share, such as your name, contact details and project description. We use it to answer your request, discuss your project and prepare a proposal. This processing is necessary to take steps at your request before a potential contract."
          },
          {
            "title": "Recipients and external services",
            "body": "Project discussions are handled by the studio and the communication services you use to contact us. Links to Instagram, LinkedIn, WhatsApp and client websites take you to external services with their own privacy policies. Social media content is not embedded in this website."
          },
          {
            "title": "Retention",
            "body": "We keep inquiry correspondence for the time needed to handle your request and any project follow-up. If a project results in a contract, the related records are kept for the relationship and applicable legal obligations. You can ask us to delete data that no longer needs to be retained."
          },
          {
            "title": "Your rights",
            "body": `You can request access to, correction or deletion of your personal data, and ask for restriction or object to processing where applicable. Contact ${business.email} to make a request. You can also lodge a complaint with the French data protection authority, the CNIL (cnil.fr).`
          }
        ]
      },
      "cookies": {
        "title": "Cookie information",
        "intro": "The Pickles Studio website does not set advertising or audience measurement cookies and does not use a cookie-based language preference.",
        "sections": [
          {
            "title": "Browsing without tracking cookies",
            "body": "The website does not include analytics, advertising scripts or embedded social media content. Language selection uses the page address, such as /fr, /en or /nl, and does not require a preference cookie."
          },
          {
            "title": "External links",
            "body": "Opening a link to Instagram, LinkedIn, WhatsApp or a client website takes you to another service. That service may use cookies according to its own policy and settings."
          },
          {
            "title": "Browser settings",
            "body": "Your browser settings let you view, block and delete cookies stored by websites. Changing these settings does not prevent you from reading the public pages of this site."
          },
          {
            "title": "Changes to the website",
            "body": "This information will be updated if the website starts using cookies or other tracking tools. Any new use requiring consent must provide a choice before those tools are activated."
          }
        ]
      }
    },
    "footer": {
      "description": "Website creation, UX/UI design and application development for businesses in Montpellier, France and beyond.",
      "sitemap": "Sitemap",
      "contact": "Contact",
      "legal": "Legal information",
      "privacy": "Privacy policy",
      "cookies": "Cookies",
      "legalNotice": "Legal notice",
      "copyright": "All rights reserved."
    }
  },
  "fr": {
    "meta": {
      "title": "Pickles Studio",
      "description": "Création de sites web, design UX/UI et développement d’applications pour les entreprises à Montpellier. Pickles Studio accompagne votre projet de la stratégie au lancement."
    },
    "navigation": {
      "menu": "Menu",
      "close": "Fermer",
      "home": "Accueil",
      "portfolio": "Portfolio",
      "services": "Services",
      "about": "À propos",
      "contact": "Contact",
      "work": "Réalisations"
    },
    "common": {
      "cities": "Montpellier · France · International",
      "discover": "Découvrir le projet",
      "liveSite": "Visiter le site du client",
      "backToPortfolio": "Retour au portfolio"
    },
    "hero": {
      "kicker": "Création web & produits digitaux",
      "sub": "Sites web, design et applications pour les entreprises de Montpellier et au-delà.",
      "headline": "Nous transformons vos idées en sites web et produits digitaux clairs et singuliers, de la stratégie au lancement.",
      "ctaPrimary": "Démarrer un projet",
      "ctaSecondary": "Voir nos projets"
    },
    "home": {
      "workTitle": "Projets Sélectionnés",
      "workIntro": "Une sélection de sites web, de plateformes et d’interfaces conçus pour accompagner le développement des entreprises.",
      "servicesTitle": "Nos Services",
      "clientsTitle": "Clients Sélectionnés",
      "clientsIntro": "Nous accompagnons des équipes qui ont besoin de vision produit, d’exécution solide et de décisions design nettes.",
      "followTitle": "Suivez-nous",
      "followMarquee": "SUIVEZ-NOUS-"
    },
    "servicesPage": {
      "eyebrow": "Services",
      "title": "De la stratégie au lancement, nous construisons des produits avec exigence et impact.",
      "intro": "Création de sites web, design UX/UI et développement d’applications web ou mobiles : Pickles Studio accompagne les entreprises de Montpellier et au-delà dans leur présence digitale.",
      "cta": "Parlons de votre projet"
    },
    "aboutPage": {
      "eyebrow": "À propos",
      "title": "Une agence premium à taille humaine conçue pour des projets digitaux ambitieux.",
      "intro": "Pickles Studio associe stratégie produit, design UX/UI et développement. Nous aidons les fondateurs et les équipes à clarifier leurs idées, créer une présence digitale solide et concrétiser leurs projets.",
      "story": "Notre approche est directe : comprendre vos objectifs, définir les priorités et collaborer tout au long du projet. Nous relions le contenu, le design d’interface et le développement pour que chaque décision serve l’expérience.",
      "principles": [
        "La clarté produit avant le bruit de production.",
        "Un design intentionnel, jamais décoratif.",
        "Une exécution qui respecte la vitesse sans sacrifier la qualité."
      ],
      "blocks": [
        {
          "title": "Notre manière de travailler",
          "body": "Nous clarifions le problème, cadrons l’opportunité, définissons la direction produit et construisons l’expérience en collaboration étroite avec les parties prenantes."
        },
        {
          "title": "Ce que nous apportons",
          "body": "Stratégie produit, UX/UI design, sites premium, applications web et résolution concrète de problèmes techniques."
        },
        {
          "title": "Qui nous accompagnons",
          "body": "Nous accompagnons les fondateurs, les marques et les équipes à Montpellier, en France et à l’international. Les projets peuvent être menés à distance, avec des échanges directs et des points réguliers."
        }
      ]
    },
    "contactPage": {
      "eyebrow": "Contact",
      "title": "Parlons du produit, de la plateforme ou du lancement que vous devez concrétiser.",
      "intro": "Que vous ayez besoin d’un site premium, d’une direction produit plus nette ou d’un partenaire pour livrer une nouvelle expérience, nous pouvons commencer par un échange ciblé.",
      "cta": business.email,
      "phoneLabel": "WhatsApp",
      "emailLabel": "Email",
      "socialLabel": "Suivez-nous",
      "availability": "Présentez-nous vos objectifs, votre calendrier et votre projet. Contactez-nous par email ou WhatsApp pour commencer l’échange.",
      "locationLabel": "Zone d’intervention",
      "location": "Montpellier, France et projets internationaux accompagnés à distance."
    },
    "portfolioPage": {
      "eyebrow": "Portfolio",
      "title": "Des réalisations choisies, façonnées par le produit, le design et l’ingénierie.",
      "intro": "Six projets sélectionnés : sites web, plateformes et applications mobiles. Chaque présentation détaille les enjeux, la réponse et les fonctionnalités livrées.",
      "stats": [
        {
          "value": "6",
          "label": "Projets sélectionnés"
        },
        {
          "value": "3",
          "label": "Stratégie, design & développement"
        }
      ]
    },
    "projectPage": {
      "overview": "Vue d’ensemble",
      "challenge": "Enjeu",
      "solution": "Réponse",
      "impact": "Impact",
      "services": "Services",
      "year": "Année",
      "client": "Client",
      "type": "Type",
      "gallery": "Galerie"
    },
    "contactBlock": {
      "title": "Nous Contacter",
      "sitemap": "Plan du site",
      "contact": "Coordonnées",
      "follow": "Suivez-nous"
    },
    "legal": {
      "updated": "Mise à jour : 4 octobre 2026",
      "privacy": {
        "title": "Politique de confidentialité",
        "intro": "Cette page explique l’utilisation des données personnelles lorsque vous consultez le site de Pickles Studio ou nous contactez pour un projet.",
        "sections": [
          {
            "title": "Contact",
            "body": `Pour toute question relative à vos données personnelles, écrivez à ${business.email}. Le studio accompagne des projets digitaux pour les entreprises de Montpellier, en France et à l’international.`
          },
          {
            "title": "Navigation sur le site",
            "body": "Le site ne comporte pas de formulaire de contact, de compte utilisateur, ni de traceur publicitaire ou de mesure d’audience. L’infrastructure d’hébergement reçoit les informations techniques nécessaires à l’affichage des pages et à leur sécurité, notamment l’adresse IP et les informations de requête."
          },
          {
            "title": "Prise de contact",
            "body": "Les liens email et WhatsApp ouvrent l’application ou le service correspondant. Si vous nous contactez, nous recevons les informations que vous choisissez de transmettre : nom, coordonnées et description du projet, par exemple. Nous les utilisons pour répondre à votre demande, échanger sur votre projet et préparer une proposition. Ce traitement est nécessaire aux démarches effectuées à votre demande avant un éventuel contrat."
          },
          {
            "title": "Destinataires et services externes",
            "body": "Les échanges projet sont traités par le studio et les services de communication que vous utilisez pour nous contacter. Les liens vers Instagram, LinkedIn, WhatsApp et les sites des clients ouvrent des services externes disposant de leurs propres politiques de confidentialité. Aucun contenu de réseau social n’est intégré dans ce site."
          },
          {
            "title": "Conservation",
            "body": "Les échanges de contact sont conservés le temps nécessaire au traitement de votre demande et au suivi du projet. Si le projet débouche sur un contrat, les documents associés sont conservés pour la relation contractuelle et les obligations légales applicables. Vous pouvez demander la suppression des données dont la conservation n’est plus nécessaire."
          },
          {
            "title": "Vos droits",
            "body": `Vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles, ainsi que la limitation ou l’opposition au traitement lorsque ces droits s’appliquent. Écrivez à ${business.email} pour exercer vos droits. Vous pouvez également adresser une réclamation à la Commission nationale de l’informatique et des libertés, la CNIL (cnil.fr).`
          }
        ]
      },
      "cookies": {
        "title": "Informations sur les cookies",
        "intro": "Le site de Pickles Studio ne dépose pas de cookies publicitaires ou de mesure d’audience et ne mémorise pas la langue au moyen d’un cookie.",
        "sections": [
          {
            "title": "Navigation sans cookies de suivi",
            "body": "Le site n’intègre ni outil analytics, ni script publicitaire, ni contenu de réseau social embarqué. Le choix de langue repose sur l’adresse de la page, comme /fr, /en ou /nl, sans cookie de préférence."
          },
          {
            "title": "Liens externes",
            "body": "Un lien vers Instagram, LinkedIn, WhatsApp ou un site client vous conduit vers un autre service. Ce service peut utiliser des cookies selon sa propre politique et ses réglages."
          },
          {
            "title": "Réglages du navigateur",
            "body": "Les réglages de votre navigateur permettent de consulter, bloquer et supprimer les cookies enregistrés par les sites. Ces réglages ne vous empêchent pas de lire les pages publiques de ce site."
          },
          {
            "title": "Évolution du site",
            "body": "Ces informations seront mises à jour si des cookies ou d’autres outils de suivi sont ajoutés au site. Toute nouvelle utilisation nécessitant votre consentement devra proposer un choix avant leur activation."
          }
        ]
      }
    },
    "footer": {
      "description": "Création de sites web, design UX/UI et développement d’applications pour les entreprises de Montpellier, en France et à l’international.",
      "sitemap": "Plan du site",
      "contact": "Contact",
      "legal": "Informations légales",
      "privacy": "Confidentialité",
      "cookies": "Cookies",
      "legalNotice": "Mentions légales",
      "copyright": "Tous droits réservés."
    }
  },
  "nl": {
    "meta": {
      "title": "Pickles Studio",
      "description": "Websites, UX/UI-design en applicatieontwikkeling voor bedrijven in Montpellier. Pickles Studio begeleidt je project van strategie tot lancering."
    },
    "navigation": {
      "menu": "Menu",
      "close": "Sluiten",
      "home": "Home",
      "portfolio": "Portfolio",
      "services": "Diensten",
      "about": "Over ons",
      "contact": "Contact",
      "work": "Projecten"
    },
    "common": {
      "cities": "Montpellier · Frankrijk · Internationaal",
      "discover": "Bekijk de case study",
      "liveSite": "Bekijk de website van de klant",
      "backToPortfolio": "Terug naar portfolio"
    },
    "hero": {
      "kicker": "Webdesign & digitale producten",
      "sub": "Websites, design en applicaties voor bedrijven in Montpellier en daarbuiten.",
      "headline": "We vertalen je ideeën naar heldere, onderscheidende websites en digitale producten, van strategie tot lancering.",
      "ctaPrimary": "Start een project",
      "ctaSecondary": "Bekijk ons werk"
    },
    "home": {
      "workTitle": "Selected Work",
      "workIntro": "Een gecureerde selectie van digitale producten, launches en premium interfaces die bedrijven vooruithelpen.",
      "servicesTitle": "Onze Services",
      "clientsTitle": "Selected Clients",
      "clientsIntro": "We werken met teams die product thinking, sterke uitvoering en scherpe designbeslissingen nodig hebben.",
      "followTitle": "Volg ons",
      "followMarquee": "FOLLOW US-"
    },
    "servicesPage": {
      "eyebrow": "Services",
      "title": "Van strategie tot launch bouwen we producten met smaak en tractie.",
      "intro": "Websites, UX/UI-design en web- of mobiele applicaties: Pickles Studio helpt bedrijven in Montpellier en daarbuiten hun digitale aanwezigheid vorm te geven en te bouwen.",
      "cta": "Laten we je project bespreken"
    },
    "aboutPage": {
      "eyebrow": "About",
      "title": "Een kleine premium agency voor ambitieuze digitale projecten.",
      "intro": "Pickles Studio opereert op het kruispunt van productstrategie, design systems en shipping-ready uitvoering. We werken met founders en teams die scherpere beslissingen, een sterkere digitale presence en minder afstand tussen idee en delivery willen.",
      "story": "Onze aanpak is direct: je doelen begrijpen, prioriteiten bepalen en gedurende het hele project samenwerken. We verbinden content, interfaceontwerp en ontwikkeling zodat elke keuze de ervaring ondersteunt.",
      "principles": [
        "Product clarity before production noise.",
        "Design that feels intentional, not decorative.",
        "Execution that respects speed without losing quality."
      ],
      "blocks": [
        {
          "title": "How we work",
          "body": "We definiëren het probleem, kaderen de kans, bepalen de productrichting en bouwen de ervaring in nauwe samenwerking met stakeholders."
        },
        {
          "title": "What we bring",
          "body": "Product strategy, UX/UI design, premium websites, web applications en hands-on technical problem solving."
        },
        {
          "title": "Met wie we werken",
          "body": "We begeleiden ondernemers, merken en teams in Montpellier, Frankrijk en internationaal. Projecten kunnen op afstand worden uitgevoerd, met direct contact en regelmatige overlegmomenten."
        }
      ]
    },
    "contactPage": {
      "eyebrow": "Contact",
      "title": "Laten we praten over het product, platform of de launch die je hierna nodig hebt.",
      "intro": "Of je nu een premium website, scherpere productrichting of een partner nodig hebt om een nieuwe ervaring te shippen, we kunnen starten met een gerichte conversatie.",
      "cta": business.email,
      "phoneLabel": "WhatsApp",
      "emailLabel": "Email",
      "socialLabel": "Volg ons",
      "availability": "Vertel ons over je doelen, planning en project. Neem contact op via email of WhatsApp om het gesprek te beginnen.",
      "locationLabel": "Werkgebied",
      "location": "Montpellier, Frankrijk en internationale projecten op afstand."
    },
    "portfolioPage": {
      "eyebrow": "Portfolio",
      "title": "Geselecteerd werk gevormd door product, design en engineering.",
      "intro": "Zes geselecteerde projecten: websites, webplatforms en mobiele applicaties. Elk project beschrijft de uitdaging, oplossing en opgeleverde functies.",
      "stats": [
        {
          "value": "6",
          "label": "Geselecteerde projecten"
        },
        {
          "value": "3",
          "label": "Strategie, design & ontwikkeling"
        }
      ]
    },
    "projectPage": {
      "overview": "Overzicht",
      "challenge": "Uitdaging",
      "solution": "Oplossing",
      "impact": "Resultaat",
      "services": "Diensten",
      "year": "Jaar",
      "client": "Klant",
      "type": "Type",
      "gallery": "Galerij"
    },
    "contactBlock": {
      "title": "Neem contact op",
      "sitemap": "Sitemap",
      "contact": "Contactgegevens",
      "follow": "Volg ons"
    },
    "legal": {
      "updated": "Bijgewerkt: 4 oktober 2026",
      "privacy": {
        "title": "Privacybeleid",
        "intro": "Deze pagina legt uit hoe persoonsgegevens worden gebruikt wanneer je de website van Pickles Studio bezoekt of contact met ons opneemt over een project.",
        "sections": [
          {
            "title": "Contact",
            "body": `Voor vragen over je persoonsgegevens kun je schrijven naar ${business.email}. De studio begeleidt digitale projecten voor bedrijven in Montpellier, Frankrijk en internationaal.`
          },
          {
            "title": "De website bezoeken",
            "body": "De website heeft geen contactformulier, accountsysteem of advertenties of tools voor publieksmeting. De hostinginfrastructuur ontvangt de technische informatie die nodig is om pagina’s te tonen en te beveiligen, waaronder je IP-adres en informatie over de aanvraag."
          },
          {
            "title": "Contact opnemen",
            "body": "Links naar email en WhatsApp openen de bijbehorende toepassing of dienst. Als je contact opneemt, ontvangen we de informatie die je zelf deelt, zoals je naam, contactgegevens en projectbeschrijving. We gebruiken die om je aanvraag te beantwoorden, je project te bespreken en een voorstel te maken. Deze verwerking is nodig om op jouw verzoek stappen te nemen vóór een mogelijke overeenkomst."
          },
          {
            "title": "Ontvangers en externe diensten",
            "body": "Projectgesprekken worden behandeld door de studio en de communicatiediensten waarmee je contact opneemt. Links naar Instagram, LinkedIn, WhatsApp en websites van klanten openen externe diensten met een eigen privacybeleid. De website bevat geen ingesloten socialemediacontent."
          },
          {
            "title": "Bewaartermijn",
            "body": "We bewaren contactberichten zolang dat nodig is om je aanvraag en de opvolging van het project af te handelen. Als een project tot een overeenkomst leidt, bewaren we de bijbehorende documenten voor de contractuele relatie en wettelijke verplichtingen. Je kunt vragen om gegevens te verwijderen die niet meer bewaard hoeven te worden."
          },
          {
            "title": "Je rechten",
            "body": `Je kunt toegang tot, correctie of verwijdering van je persoonsgegevens vragen, en waar van toepassing om beperking vragen of bezwaar maken tegen de verwerking. Schrijf naar ${business.email} om een verzoek in te dienen. Je kunt ook een klacht indienen bij de Franse privacytoezichthouder CNIL (cnil.fr).`
          }
        ]
      },
      "cookies": {
        "title": "Informatie over cookies",
        "intro": "De website van Pickles Studio plaatst geen advertentie- of publieksmetingscookies en bewaart de taalkeuze niet met een cookie.",
        "sections": [
          {
            "title": "Browsen zonder trackingcookies",
            "body": "De website bevat geen analytics, advertentiescripts of ingesloten socialemediacontent. De taalkeuze gebruikt het adres van de pagina, zoals /fr, /en of /nl, en heeft geen voorkeurcookie nodig."
          },
          {
            "title": "Externe links",
            "body": "Een link naar Instagram, LinkedIn, WhatsApp of een website van een klant brengt je naar een andere dienst. Die dienst kan cookies gebruiken volgens het eigen beleid en de eigen instellingen."
          },
          {
            "title": "Browserinstellingen",
            "body": "Via je browserinstellingen kun je cookies van websites bekijken, blokkeren en verwijderen. Deze instellingen verhinderen niet dat je de openbare pagina’s van deze website leest."
          },
          {
            "title": "Wijzigingen aan de website",
            "body": "Deze informatie wordt bijgewerkt als de website cookies of andere trackingtools gaat gebruiken. Voor nieuw gebruik waarvoor toestemming nodig is, wordt een keuze aangeboden voordat de tools worden geactiveerd."
          }
        ]
      }
    },
    "footer": {
      "description": "Websites, UX/UI-design en applicatieontwikkeling voor bedrijven in Montpellier, Frankrijk en daarbuiten.",
      "sitemap": "Sitemap",
      "contact": "Contact",
      "legal": "Juridische informatie",
      "privacy": "Privacybeleid",
      "cookies": "Cookies",
      "legalNotice": "Juridische kennisgeving",
      "copyright": "Alle rechten voorbehouden."
    }
  }
};

const services = [
  {
    key: "strategy",
    image: "/img/bg-pickles.jpg",
    titles: {
      en: "Research & Strategy",
      fr: "Recherche & Stratégie",
      nl: "Research & Strategy",
    },
    intros: {
      en: "We clarify positioning, roadmap and product intent before execution starts burning time.",
      fr: "Nous clarifions le positionnement, la roadmap et l’intention produit avant que l’exécution ne consomme du temps inutilement.",
      nl: "We brengen positionering, roadmap en productintentie scherp voordat execution tijd gaat verbranden.",
    },
    bullets: {
      en: ["Product framing", "Audit & prioritization", "Roadmapping"],
      fr: ["Cadrage produit", "Audit & priorisation", "Roadmapping"],
      nl: ["Product framing", "Audit & prioritisatie", "Roadmapping"],
    },
  },
  {
    key: "design",
    image: "/img/komarov-egor-oYpRcZt2xGk-unsplash.jpg",
    titles: {
      en: "UX/UI & Creative Direction",
      fr: "UX/UI & Direction Créative",
      nl: "UX/UI & Creative Direction",
    },
    intros: {
      en: "Interfaces, systems and visual decisions built to feel premium and remain useful in production.",
      fr: "Des interfaces, systèmes et choix visuels pensés pour être premium tout en restant solides à produire.",
      nl: "Interfaces, systemen en visuele beslissingen die premium aanvoelen en in productie bruikbaar blijven.",
    },
    bullets: {
      en: ["Experience architecture", "High-fidelity interface design", "Design system foundations"],
      fr: ["Architecture d’expérience", "Design d’interface haute fidélité", "Fondations de design system"],
      nl: ["Experience architecture", "High-fidelity interface design", "Design system foundations"],
    },
  },
  {
    key: "websites",
    image: "/img/projects/edge-dynamics-hero.png",
    titles: {
      en: "Premium Websites",
      fr: "Sites Premium",
      nl: "Premium Websites",
    },
    intros: {
      en: "Launch sites and brand presences that make positioning feel clear, credible and contemporary.",
      fr: "Des sites de lancement et vitrines de marque qui rendent le positionnement clair, crédible et actuel.",
      nl: "Launch websites en brand presences die positionering helder, geloofwaardig en eigentijds maken.",
    },
    bullets: {
      en: ["Showcase sites", "CMS-ready structures", "Conversion-focused pages"],
      fr: ["Sites vitrines", "Structures prêtes pour CMS", "Pages orientées conversion"],
      nl: ["Showcase sites", "CMS-ready structures", "Conversion-focused pages"],
    },
  },
  {
    key: "products",
    image: "/img/projects/sciences-co-hero.png",
    titles: {
      en: "Web & App Products",
      fr: "Produits Web & App",
      nl: "Web & App Products",
    },
    intros: {
      en: "Product-facing experiences built with user flows, data visibility and operational needs in mind.",
      fr: "Des expériences orientées produit conçues en tenant compte des parcours, de la donnée et des besoins opérationnels.",
      nl: "Productgerichte ervaringen gebouwd met user flows, zicht op data en operationele noden in gedachten.",
    },
    bullets: {
      en: ["Web applications", "Mobile experiences", "Product iteration support"],
      fr: ["Applications web", "Expériences mobiles", "Support d’itération produit"],
      nl: ["Web applications", "Mobile experiences", "Product iteration support"],
    },
  },
];

const socialLinks = [
  {
    name: { en: "Instagram", fr: "Instagram", nl: "Instagram" },
    link: "https://instagram.com/picklesstudio",
  },
  {
    name: { en: "LinkedIn", fr: "LinkedIn", nl: "LinkedIn" },
    link: "https://www.linkedin.com/company/studio-pickles/",
  },
  {
    name: { en: "WhatsApp", fr: "WhatsApp", nl: "WhatsApp" },
    link: business.whatsappUrl,
  },
  {
    name: { en: "Mail", fr: "Mail", nl: "Mail" },
    link: `mailto:${business.email}`,
  },
];

const clientNames = [
  "Sciences Co",
  "EDMC Network",
  "Edge Dynamics",
  "MBUZZ",
  "Saudi Excellence Co",
  "AG Designs",
];

const projectBase = [
  {
    slug: "sciences-co",
    year: "2023",
    client: "Sciences Co",
    type: "Web Application",
    externalUrl: "https://www.sciences-cognitives.fr/",
    featured: true,
    heroImage: "/img/projects/sciences-co-hero.png",
    gallery: [
      "/img/projects/sciences-co-2.png",
      "/img/projects/sciences-co-3.png",
      "/img/projects/sciences-co-5.png",
    ],
    services: [
      "Product Management",
      "UX/UI Design",
      "Web Application Development",
    ],
    impact: {
      en: ["Subscription-ready platform", "Scalable content management", "Clearer membership journeys"],
      fr: ["Plateforme prête pour l’abonnement", "Gestion de contenu scalable", "Parcours d’adhésion plus clairs"],
      nl: ["Platform geschikt voor abonnementen", "Schaalbaar contentbeheer", "Duidelijkere aanmeldroutes"],
    },
    text: {
      en: {
        title: "Sciences Co",
        summary:
          "A learning platform redesign that turned a constrained WordPress setup into a scalable product for educators and members.",
        challenge:
          "Sciences Co had outgrown its earlier website. Content was hard to manage, the experience was fragmented and the platform needed to support both growth and subscriptions.",
        solution:
          "We reframed the platform as a real product: clearer resource architecture, smoother membership flows, a stronger interface system and a more maintainable technical base for future expansion.",
      },
      fr: {
        title: "Sciences Co",
        summary:
          "Une refonte de plateforme d’apprentissage qui a transformé un WordPress limité en produit scalable pour enseignants et adhérents.",
        challenge:
          "Sciences Co avait dépassé les limites de son ancien site. Le contenu était difficile à gérer, l’expérience fragmentée et la plateforme devait mieux soutenir la croissance et l’abonnement.",
        solution:
          "Nous avons recadré la plateforme comme un vrai produit : architecture de ressources plus claire, parcours d’adhésion plus fluides, système d’interface plus solide et base technique plus maintenable pour la suite.",
      },
      nl: {
        title: "Sciences Co",
        summary:
          "Een redesign van een leerplatform dat een beperkte WordPress-setup veranderde in een schaalbaar product voor docenten en members.",
        challenge:
          "Sciences Co was de grenzen van de oude website voorbij. Content was moeilijk te beheren, de ervaring was gefragmenteerd en het platform moest groei en subscriptions ondersteunen.",
        solution:
          "We herpositioneerden het platform als een echt product: helderdere resource-architectuur, soepelere membership flows, een sterker interface-systeem en een onderhoudsvriendelijkere technische basis.",
      },
    },
  },
  {
    slug: "dropper-portal",
    year: "2024",
    client: "EDMC Network",
    type: "Web Platform",
    externalUrl: "",
    featured: true,
    heroImage: "/img/projects/dropper-portal-hero.png",
    gallery: [
      "/img/projects/dropper-portal-2.png",
      "/img/projects/dropper-portal-3.png",
      "/img/projects/dropper-app-3.png",
    ],
    services: [
      "Web Application Development",
      "Data Management",
      "UX/UI Design",
    ],
    impact: {
      en: ["Artist analytics portal", "Real-time data visibility", "Operational content management"],
      fr: ["Portail analytics pour artistes", "Visibilité data en temps réel", "Gestion opérationnelle des contenus"],
      nl: ["Artist analytics portal", "Real-time data visibility", "Operational content management"],
    },
    text: {
      en: {
        title: "Dropper Portal",
        summary:
          "A data-heavy portal designed to help artists and administrators manage content, monitor performance and act faster.",
        challenge:
          "EDMC Network needed a back-office experience that made complex artist, track and engagement data readable without feeling technical for its own sake.",
        solution:
          "We structured the portal around actionable dashboards, filtering patterns and a cleaner admin flow so the platform could support both daily operations and product-level insight.",
      },
      fr: {
        title: "Dropper Portal",
        summary:
          "Un portail riche en données conçu pour aider artistes et administrateurs à gérer le contenu, suivre la performance et agir plus vite.",
        challenge:
          "EDMC Network avait besoin d’une expérience back-office capable de rendre lisibles des données complexes liées aux artistes, aux titres et à l’engagement, sans tomber dans un produit purement technique.",
        solution:
          "Nous avons structuré le portail autour de dashboards actionnables, de patterns de filtrage et d’un flux admin plus propre afin de soutenir à la fois l’opérationnel quotidien et la lecture produit.",
      },
      nl: {
        title: "Dropper Portal",
        summary:
          "Een data-zwaar portal dat artiesten en administrators helpt content te beheren, prestaties te volgen en sneller te handelen.",
        challenge:
          "EDMC Network had een back-office ervaring nodig die complexe artiest-, track- en engagementdata leesbaar maakte zonder nodeloze technische frictie.",
        solution:
          "We structureerden het portal rond bruikbare dashboards, filterpatronen en een schonere admin flow zodat het zowel dagelijkse operaties als productinzichten ondersteunt.",
      },
    },
  },
  {
    slug: "dropper-app",
    year: "2024",
    client: "EDMC Network",
    type: "Mobile Application",
    externalUrl: "",
    featured: true,
    heroImage: "/img/projects/dropper-app-hero.png",
    gallery: [
      "/img/projects/dropper-app-2.png",
      "/img/projects/dropper-app-3.png",
      "/img/projects/dropper-portal-hero.png",
    ],
    services: ["Mobile App Development", "UI/UX Design", "Data Analytics"],
    impact: {
      en: ["Beta launch on Test Flight", "Artist-facing analytics", "Retention-oriented feature set"],
      fr: ["Lancement bêta sur Test Flight", "Analytics côté artistes", "Fonctionnalités pensées pour la rétention"],
      nl: ["Beta launch on Test Flight", "Artist-facing analytics", "Retention-oriented feature set"],
    },
    text: {
      en: {
        title: "Dropper App",
        summary:
          "A mobile music experience mixing audience engagement, artist support and analytics into a product made for repeat usage.",
        challenge:
          "The app had to serve two ambitions at once: feel engaging for listeners while still feeding artists and operators with meaningful performance signals.",
        solution:
          "We designed a mobile experience with interactive charts, clearer listening pathways and a product layer that could translate usage into actionable artist insight.",
      },
      fr: {
        title: "Dropper App",
        summary:
          "Une expérience mobile musicale mêlant engagement de l’audience, soutien aux artistes et analytics dans un produit pensé pour la récurrence.",
        challenge:
          "L’application devait répondre à deux ambitions : être engageante pour les auditeurs tout en fournissant aux artistes et opérateurs des signaux de performance utiles.",
        solution:
          "Nous avons conçu une expérience mobile avec charts interactifs, parcours d’écoute plus nets et une couche produit capable de transformer l’usage en insight exploitable côté artistes.",
      },
      nl: {
        title: "Dropper App",
        summary:
          "Een mobiele muziekervaring die audience engagement, artist support en analytics combineert in een product voor herhaald gebruik.",
        challenge:
          "De app moest twee ambities tegelijk ondersteunen: aantrekkelijk zijn voor listeners en tegelijk betekenisvolle performance signals geven aan artiesten en operators.",
        solution:
          "We ontwierpen een mobiele ervaring met interactieve charts, duidelijkere listening flows en een productlaag die gebruik vertaalt naar bruikbare artist insights.",
      },
    },
  },
  {
    slug: "edge-dynamics",
    year: "2023",
    client: "Edge Dynamics",
    type: "Website",
    externalUrl: "",
    featured: true,
    heroImage: "/img/projects/edge-dynamics-hero.png",
    gallery: [
      "/img/projects/edge-dynamics-1.png",
      "/img/projects/edge-dynamics-4.png",
      "/img/projects/edge-dynamics-6.png",
    ],
    services: ["Website Development", "UX/UI Design", "Branding", "Logo Design"],
    impact: {
      en: ["Clearer industrial positioning", "Futuristic visual language", "Budget-conscious delivery"],
      fr: ["Positionnement industriel clarifié", "Langage visuel futuriste", "Livraison maîtrisée côté budget"],
      nl: ["Clearer industrial positioning", "Futuristic visual language", "Budget-conscious delivery"],
    },
    text: {
      en: {
        title: "Edge Dynamics",
        summary:
          "A futuristic launch website for an industrial IoT company that needed credibility, clarity and speed on a limited budget.",
        challenge:
          "Edge Dynamics needed a modern presence that could explain complex sensing products and still feel commercially sharp enough for a young industrial brand.",
        solution:
          "We built a clean dark visual system with sharper hierarchy, concise product storytelling and a more forward-looking digital identity aligned with the company’s vision.",
      },
      fr: {
        title: "Edge Dynamics",
        summary:
          "Un site de lancement futuriste pour une société d’IoT industriel qui avait besoin de crédibilité, de clarté et de rapidité avec un budget contraint.",
        challenge:
          "Edge Dynamics avait besoin d’une présence moderne capable d’expliquer des produits de capteurs complexes tout en restant commercialement crédible pour une jeune marque industrielle.",
        solution:
          "Nous avons construit un système visuel dark, une hiérarchie plus nette, un storytelling produit concis et une identité digitale plus prospective alignée avec leur vision.",
      },
      nl: {
        title: "Edge Dynamics",
        summary:
          "Een futuristische launch website voor een industriële IoT-speler die geloofwaardigheid, duidelijkheid en snelheid nodig had binnen een beperkt budget.",
        challenge:
          "Edge Dynamics had een moderne presence nodig die complexe sensing producten kon uitleggen en tegelijk commercieel scherp aanvoelde voor een jong industrieel merk.",
        solution:
          "We bouwden een helder dark visual system met sterkere hiërarchie, beknopte product storytelling en een meer vooruitkijkende digitale identiteit.",
      },
    },
  },
  {
    slug: "mbuzz",
    year: "2022",
    client: "MBUZZ",
    type: "Website",
    externalUrl: "",
    featured: true,
    heroImage: "/img/projects/mbuzz-hero.png",
    gallery: ["/img/projects/mbuzz-2.png", "/img/projects/mbuzz-3.png"],
    services: [
      "Branding",
      "UX/UI Design",
      "Logo Design",
      "Website Development",
      "Pitch Deck Design",
    ],
    impact: {
      en: ["New branch launch support", "Brand alignment with parent company", "Investor-facing narrative assets"],
      fr: ["Support au lancement de la branche", "Alignement avec la marque mère", "Supports narratifs pour investisseurs"],
      nl: ["New branch launch support", "Brand alignment with parent company", "Investor-facing narrative assets"],
    },
    text: {
      en: {
        title: "MBUZZ",
        summary:
          "A launch identity and website for an esports branch that needed to feel energetic without disconnecting from its parent brand.",
        challenge:
          "MBUZZ Esports needed a new digital presence from scratch, balancing gaming culture with the legitimacy and structure of an established corporate group.",
        solution:
          "We shaped a darker, more vibrant experience with a clear visual system and supporting presentation assets, helping the new branch look coherent from both community and investor perspectives.",
      },
      fr: {
        title: "MBUZZ",
        summary:
          "Une identité de lancement et un site pour une branche esports qui devait être énergique sans rompre avec sa maison mère.",
        challenge:
          "MBUZZ Esports avait besoin d’une présence digitale créée de zéro, en trouvant l’équilibre entre culture gaming et crédibilité d’un groupe déjà installé.",
        solution:
          "Nous avons conçu une expérience plus sombre et plus vibrante, avec un système visuel clair et des supports de présentation complémentaires, afin que la nouvelle branche soit cohérente autant pour la communauté que pour les investisseurs.",
      },
      nl: {
        title: "MBUZZ",
        summary:
          "Een launch identity en website voor een esports-branch die energiek moest aanvoelen zonder los te komen van het parent brand.",
        challenge:
          "MBUZZ Esports had een digitale presence from scratch nodig, met een balans tussen gaming culture en de legitimiteit van een gevestigde corporate group.",
        solution:
          "We ontwikkelden een donkerdere, levendigere ervaring met een helder visual system en ondersteunende presentation assets, zodat de nieuwe branch coherent aanvoelde voor community én investors.",
      },
    },
  },
  {
    slug: "saudi-excellence",
    year: "2022",
    client: "Saudi Excellence Co",
    type: "Website",
    externalUrl: "https://www.saudiexcellenceco.com/",
    featured: true,
    heroImage: "/img/projects/saudi-excellence-hero.png",
    gallery: [
      "/img/projects/saudi-excellence-2.png",
      "/img/projects/saudi-excellence-3.png",
    ],
    services: ["UX/UI Design", "Website Development"],
    impact: {
      en: ["First digital presence", "Clearer defense-tech positioning", "Accessible corporate structure"],
      fr: ["Première présence digitale", "Positionnement defense-tech clarifié", "Structure corporate plus accessible"],
      nl: ["First digital presence", "Clearer defense-tech positioning", "Accessible corporate structure"],
    },
    text: {
      en: {
        title: "Saudi Excellence Co",
        summary:
          "A first website for a defense and technology company that needed a credible digital footprint without excess complexity.",
        challenge:
          "The company had no real online presence and needed a website that felt serious, modern and aligned with a highly formal sector.",
        solution:
          "We built a restrained corporate experience with clearer information architecture and a more contemporary interface, giving the business a first digital layer that felt credible and usable.",
      },
      fr: {
        title: "Saudi Excellence Co",
        summary:
          "Un premier site pour une entreprise defense & technology qui devait construire une présence crédible sans complexité inutile.",
        challenge:
          "L’entreprise n’avait pas de véritable présence en ligne et avait besoin d’un site à la fois sérieux, moderne et aligné avec un secteur très formel.",
        solution:
          "Nous avons conçu une expérience corporate maîtrisée avec une architecture de l’information plus claire et une interface plus contemporaine, afin de poser une première couche digitale crédible et utile.",
      },
      nl: {
        title: "Saudi Excellence Co",
        summary:
          "Een eerste website voor een defense & technology bedrijf dat een geloofwaardige digitale footprint nodig had zonder overmatige complexiteit.",
        challenge:
          "Het bedrijf had geen echte online presence en had een website nodig die serieus, modern en passend bij een formele sector aanvoelde.",
        solution:
          "We bouwden een beheerste corporate ervaring met helderdere informatiearchitectuur en een meer eigentijdse interface, zodat het bedrijf een geloofwaardige en bruikbare eerste digitale laag kreeg.",
      },
    },
  },
];

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getSiteContent(locale = defaultLocale) {
  return siteContent[locale] || siteContent[defaultLocale];
}

export function getNavItems(locale = defaultLocale) {
  const content = getSiteContent(locale);
  return baseNav.map((item) => ({
    ...item,
    label: content.navigation[item.key],
    href: `/${locale}${item.href}`,
  }));
}

export function getServices(locale = defaultLocale) {
  return services.map((service) => ({
    key: service.key,
    image: service.image,
    title: service.titles[locale] || service.titles.en,
    intro: service.intros[locale] || service.intros.en,
    bullets: service.bullets[locale] || service.bullets.en,
  }));
}

export function getSocialLinks(locale = defaultLocale) {
  return socialLinks.map((item) => ({
    name: item.name[locale] || item.name.en,
    link: item.link,
  }));
}

export function getClientNames() {
  return clientNames;
}

export function getProjects(locale = defaultLocale) {
  return projectBase.map((project) => {
    const text = project.text[locale] || project.text.en;
    return {
      ...project,
      title: text.title,
      summary: text.summary,
      challenge: text.challenge,
      solution: text.solution,
      impactPoints: project.impact[locale] || project.impact.en,
    };
  });
}

export function getFeaturedProjects(locale = defaultLocale, limit = 6) {
  return getProjects(locale)
    .filter((project) => project.featured)
    .slice(0, limit);
}

export function getProjectBySlug(locale = defaultLocale, slug) {
  return getProjects(locale).find((project) => project.slug === slug) || null;
}

export function getLegalPage(locale = defaultLocale, key) {
  const content = getSiteContent(locale);
  if (key === "privacy-policy") {
    return content.legal.privacy;
  }
  if (key === "cookie-policy") {
    return content.legal.cookies;
  }
  return null;
}
