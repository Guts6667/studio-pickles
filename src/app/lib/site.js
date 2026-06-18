export const locales = ["en", "fr", "nl"];
export const defaultLocale = "en";

const baseNav = [
  { key: "home", href: "" },
  { key: "portfolio", href: "/portfolio" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

const siteContent = {
  en: {
    meta: {
      title: "Pickles Studio",
      description:
        "Premium product agency blending strategy, design and engineering for ambitious brands.",
    },
    navigation: {
      menu: "Menu",
      close: "Close",
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
      about: "About",
      contact: "Contact",
      work: "Work",
    },
    common: {
      cities: "Paris & Rotterdam",
      discover: "Discover the case study",
      liveSite: "Visit live project",
      backToPortfolio: "Back to portfolio",
      legalPlaceholder:
        "Review the company identity, address and any tool-specific providers before publishing the final legal version.",
    },
    hero: {
      kicker: "Product agency premium",
      sub: "We are a product agency based in Paris & Rotterdam.",
      headline:
        "We shape premium digital products for founders, brands and teams that need clarity, speed and craft.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View our work",
    },
    home: {
      workTitle: "Selected Work",
      workIntro:
        "A curated selection of digital products, launches and premium interfaces designed to move businesses forward.",
      servicesTitle: "Our Services",
      clientsTitle: "Selected Clients",
      clientsIntro:
        "We partner with teams that need product thinking, strong execution and sharp design decisions.",
      followTitle: "Follow Us",
      followMarquee: "FOLLOW US-",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "From strategy to launch, we build products with taste and traction.",
      intro:
        "Pickles Studio combines product thinking, creative direction and technical execution to turn fuzzy ideas into premium digital experiences.",
      cta: "Let’s discuss your project",
    },
    aboutPage: {
      eyebrow: "About",
      title: "A small premium agency built for ambitious digital work.",
      intro:
        "Pickles Studio operates at the intersection of product strategy, design systems and shipping-ready execution. We work closely with founders and teams that want sharper decisions, stronger digital presence and fewer layers between idea and delivery.",
      story:
        "Our approach is intentionally compact: senior thinking, clear collaboration and a bias toward momentum. We stay close to the product, challenge weak assumptions and keep the craft high across interface, narrative and implementation.",
      principles: [
        "Product clarity before production noise.",
        "Design that feels deliberate, not decorative.",
        "Execution that respects both speed and quality.",
      ],
      blocks: [
        {
          title: "How we work",
          body:
            "We define the problem, frame the opportunity, shape the product direction and build the experience in tight collaboration with stakeholders.",
        },
        {
          title: "What we bring",
          body:
            "Product strategy, UX/UI design, premium websites, web applications and hands-on technical problem solving.",
        },
        {
          title: "Where we operate",
          body:
            "Based between Paris and Rotterdam, we collaborate internationally and keep communication direct, lightweight and decision-oriented.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let’s discuss the product, platform or launch you need next.",
      intro:
        "Whether you need a premium website, a sharper product direction or a partner to ship a new experience, we can start with a focused conversation.",
      cta: "contact@studiopickles.io",
      phoneLabel: "WhatsApp",
      emailLabel: "Email",
      socialLabel: "Follow us",
      availability:
        "Current contact details use placeholders where final brand information has not yet been confirmed.",
    },
    portfolioPage: {
      eyebrow: "Portfolio",
      title: "Selected work shaped through product, design and engineering.",
      intro:
        "A curated body of work spanning web platforms, mobile experiences, launch websites and product-facing brand systems.",
      stats: [
        { value: "+20", label: "Projects delivered" },
        { value: "6", label: "Featured case studies" },
        { value: "3", label: "Core disciplines" },
        { value: "2", label: "Cities of operation" },
      ],
    },
    projectPage: {
      overview: "Overview",
      challenge: "Challenge",
      solution: "Solution",
      impact: "Impact",
      services: "Services",
      year: "Year",
      client: "Client",
      type: "Type",
      gallery: "Gallery",
      placeholderImpact: "Outcome details to be confirmed.",
    },
    contactBlock: {
      title: "Contact Us",
      sitemap: "Sitemap",
      contact: "Contact details",
      follow: "Follow us",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        intro:
          "This privacy policy explains how Pickles Studio may collect, use and protect personal data when you browse the website, contact the studio or start a project conversation.",
        sections: [
          {
            title: "Who we are",
            body:
              "Pickles Studio is a premium product agency operating between Paris and Rotterdam. For legal or privacy-related questions, you can currently contact the studio at contact@studiopickles.io. If a registered company name, address or VAT number applies, those details should be added to the final published version of this policy.",
          },
          {
            title: "What information may be collected",
            body:
              "Depending on how you interact with the website, Pickles Studio may collect contact details such as your name, email address, company name, phone number and any project information you choose to share. Technical information such as browser type, device type, approximate location, referral source, visited pages and basic analytics events may also be collected automatically through standard website tools.",
          },
          {
            title: "How the information is used",
            body:
              "Personal data may be used to answer inquiries, manage project discussions, provide proposals, improve the website experience, understand interest in services, maintain website security and meet legal or administrative obligations. Pickles Studio does not use personal information for unrelated purposes without a valid reason or legal basis.",
          },
          {
            title: "Legal basis for processing",
            body:
              "Where applicable, Pickles Studio processes personal data on one or more of the following grounds: your consent, the need to respond to a request before entering into a contract, the performance of a contract, legitimate interest in running and improving the studio website, or compliance with legal obligations.",
          },
          {
            title: "Sharing with service providers",
            body:
              "Information may be shared only with service providers that help operate the website or studio workflows, such as hosting providers, analytics providers, email services, scheduling tools or communication platforms. These providers should only process the information required for their function and are expected to apply appropriate confidentiality and security measures.",
          },
          {
            title: "Data retention",
            body:
              "Pickles Studio keeps personal data only for as long as it is reasonably necessary for the purpose for which it was collected. Inquiry emails and project-related communications may be kept for follow-up, relationship management, legal recordkeeping or operational continuity, unless deletion is requested and retention is not otherwise required.",
          },
          {
            title: "International transfers",
            body:
              "Because digital tools and service providers may operate in different countries, some information may be processed outside your country of residence. When that happens, reasonable steps should be taken to ensure an appropriate level of protection, including contractual safeguards where required.",
          },
          {
            title: "Your rights",
            body:
              "Depending on the laws that apply to you, you may have the right to request access to your personal data, ask for correction or deletion, object to certain processing, request restriction, withdraw consent where consent is the basis for processing, or request data portability. To exercise any of these rights, contact contact@studiopickles.io.",
          },
          {
            title: "Security",
            body:
              "Pickles Studio aims to use reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse or disclosure. However, no online transmission or storage system can be guaranteed to be fully secure, so absolute security cannot be promised.",
          },
          {
            title: "Updates to this policy",
            body:
              "This privacy policy may be updated from time to time to reflect legal, operational or website changes. The latest version should always be the one published on this page, with the effective date added once the policy is finalized.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro:
          "This cookie policy explains how Pickles Studio may use cookies and similar technologies to keep the website functional, understand traffic and improve the browsing experience.",
        sections: [
          {
            title: "What cookies are",
            body:
              "Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, support core functionality, measure usage and sometimes personalize certain parts of the experience.",
          },
          {
            title: "Why cookies may be used",
            body:
              "Pickles Studio may use cookies to make the site work properly, understand how visitors use the website, remember simple preferences, improve performance and evaluate interest in the studio’s services or content. Cookies are not intended to collect more data than is reasonably necessary for these purposes.",
          },
          {
            title: "Types of cookies that may be present",
            body:
              "The website may use essential cookies required for technical operation, analytics cookies that help measure visits and behavior, performance cookies that support reliability and loading quality, and functional cookies that remember simple preferences. If marketing or third-party targeting cookies are ever introduced, the policy and any consent mechanism should be updated accordingly.",
          },
          {
            title: "Third-party tools",
            body:
              "Some cookies may be set by third-party services used to operate or enhance the website, such as analytics providers, embedded content tools, scheduling products or social media integrations. Those third parties may process certain usage data according to their own privacy documentation.",
          },
          {
            title: "How to manage cookies",
            body:
              "You can usually control or delete cookies through your browser settings. Depending on the tools used on the site, you may also be able to accept or refuse non-essential cookies through a consent banner or settings panel. Blocking certain cookies may affect how parts of the website function.",
          },
          {
            title: "Cookie duration",
            body:
              "Some cookies only remain active during your browsing session and disappear when you close your browser. Others stay on your device for a defined period so that preferences, analytics or technical settings can be recognized when you return.",
          },
          {
            title: "Updates to this policy",
            body:
              "This cookie policy may be updated when the website changes, when new tools are added or when legal requirements evolve. The version available on this page should be treated as the most current one, with a revision date added in the final published version.",
          },
        ],
      },
    },
  },
  fr: {
    meta: {
      title: "Pickles Studio",
      description:
        "Agence produit premium mêlant stratégie, design et développement pour des marques ambitieuses.",
    },
    navigation: {
      menu: "Menu",
      close: "Fermer",
      home: "Accueil",
      portfolio: "Portfolio",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      work: "Réalisations",
    },
    common: {
      cities: "Paris & Rotterdam",
      discover: "Voir la case study",
      liveSite: "Visiter le projet",
      backToPortfolio: "Retour au portfolio",
      legalPlaceholder:
        "Vérifiez la raison sociale, l’adresse et les éventuels prestataires exacts avant publication de la version juridique finale.",
    },
    hero: {
      kicker: "Agence produit premium",
      sub: "Nous sommes une agence produit basée à Paris & Rotterdam.",
      headline:
        "Nous concevons des produits digitaux premium pour les fondateurs, les marques et les équipes qui ont besoin de clarté, de vitesse et d’exigence.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Voir nos projets",
    },
    home: {
      workTitle: "Projets Sélectionnés",
      workIntro:
        "Une sélection curée de produits digitaux, lancements et interfaces premium conçus pour faire avancer les entreprises.",
      servicesTitle: "Nos Services",
      clientsTitle: "Clients Sélectionnés",
      clientsIntro:
        "Nous accompagnons des équipes qui ont besoin de vision produit, d’exécution solide et de décisions design nettes.",
      followTitle: "Suivez-nous",
      followMarquee: "SUIVEZ-NOUS-",
    },
    servicesPage: {
      eyebrow: "Services",
      title:
        "De la stratégie au lancement, nous construisons des produits avec exigence et impact.",
      intro:
        "Pickles Studio réunit réflexion produit, direction créative et exécution technique pour transformer des idées floues en expériences digitales premium.",
      cta: "Parlons de votre projet",
    },
    aboutPage: {
      eyebrow: "À propos",
      title:
        "Une agence premium à taille humaine conçue pour des projets digitaux ambitieux.",
      intro:
        "Pickles Studio travaille au croisement de la stratégie produit, des systèmes de design et de l’exécution prête à être mise en ligne. Nous collaborons avec des fondateurs et des équipes qui veulent de meilleures décisions, une présence digitale plus forte et moins de distance entre idée et livraison.",
      story:
        "Notre fonctionnement est volontairement compact : de la séniorité, des échanges clairs et un vrai sens du rythme. Nous restons proches du produit, challengeons les hypothèses fragiles et maintenons un haut niveau d’exigence sur l’interface, le récit et l’implémentation.",
      principles: [
        "La clarté produit avant le bruit de production.",
        "Un design intentionnel, jamais décoratif.",
        "Une exécution qui respecte la vitesse sans sacrifier la qualité.",
      ],
      blocks: [
        {
          title: "Notre manière de travailler",
          body:
            "Nous clarifions le problème, cadrons l’opportunité, définissons la direction produit et construisons l’expérience en collaboration étroite avec les parties prenantes.",
        },
        {
          title: "Ce que nous apportons",
          body:
            "Stratégie produit, UX/UI design, sites premium, applications web et résolution concrète de problèmes techniques.",
        },
        {
          title: "Où nous opérons",
          body:
            "Basés entre Paris et Rotterdam, nous collaborons à l’international avec une communication directe, légère et orientée décision.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title:
        "Parlons du produit, de la plateforme ou du lancement que vous devez concrétiser.",
      intro:
        "Que vous ayez besoin d’un site premium, d’une direction produit plus nette ou d’un partenaire pour livrer une nouvelle expérience, nous pouvons commencer par un échange ciblé.",
      cta: "contact@studiopickles.io",
      phoneLabel: "WhatsApp",
      emailLabel: "Email",
      socialLabel: "Suivez-nous",
      availability:
        "Les coordonnées actuelles utilisent des placeholders lorsque l’information finale de marque n’a pas encore été confirmée.",
    },
    portfolioPage: {
      eyebrow: "Portfolio",
      title:
        "Des réalisations choisies, façonnées par le produit, le design et l’ingénierie.",
      intro:
        "Un portfolio curé allant des plateformes web aux expériences mobiles, en passant par les sites de lancement et les systèmes visuels orientés produit.",
      stats: [
        { value: "+20", label: "Projets livrés" },
        { value: "6", label: "Case studies mises en avant" },
        { value: "3", label: "Disciplines cœur" },
        { value: "2", label: "Villes d’opération" },
      ],
    },
    projectPage: {
      overview: "Vue d’ensemble",
      challenge: "Enjeu",
      solution: "Réponse",
      impact: "Impact",
      services: "Services",
      year: "Année",
      client: "Client",
      type: "Type",
      gallery: "Galerie",
      placeholderImpact: "Les résultats détaillés restent à confirmer.",
    },
    contactBlock: {
      title: "Nous Contacter",
      sitemap: "Plan du site",
      contact: "Coordonnées",
      follow: "Suivez-nous",
    },
    legal: {
      privacy: {
        title: "Politique de Confidentialité",
        intro:
          "Cette politique de confidentialité explique comment Pickles Studio peut collecter, utiliser et protéger les données personnelles lorsque vous naviguez sur le site, contactez le studio ou engagez une discussion projet.",
        sections: [
          {
            title: "Qui nous sommes",
            body:
              "Pickles Studio est une agence produit premium opérant entre Paris et Rotterdam. Pour toute question liée à la confidentialité ou aux données personnelles, vous pouvez actuellement écrire à contact@studiopickles.io. Si une raison sociale, une adresse ou un numéro de TVA s’appliquent, ces informations devront être ajoutées à la version finale publiée de cette politique.",
          },
          {
            title: "Informations susceptibles d’être collectées",
            body:
              "Selon votre manière d’utiliser le site, Pickles Studio peut collecter des coordonnées telles que votre nom, votre adresse email, le nom de votre société, votre numéro de téléphone et toute information projet que vous choisissez de partager. Des informations techniques comme le type de navigateur, le type d’appareil, une localisation approximative, la source de provenance, les pages visitées et certains événements analytics peuvent également être collectées automatiquement via les outils standards du site.",
          },
          {
            title: "Utilisation des informations",
            body:
              "Les données personnelles peuvent être utilisées pour répondre aux demandes, gérer les échanges projet, établir des propositions, améliorer l’expérience du site, comprendre l’intérêt pour les services du studio, maintenir la sécurité du site et respecter les obligations légales ou administratives. Pickles Studio n’utilise pas les données personnelles à des fins sans lien avec ces objectifs sans motif valable ou base légale appropriée.",
          },
          {
            title: "Base légale du traitement",
            body:
              "Lorsque cela s’applique, Pickles Studio traite les données personnelles sur l’une ou plusieurs des bases suivantes : votre consentement, la nécessité de répondre à une demande avant un contrat, l’exécution d’un contrat, l’intérêt légitime à faire fonctionner et améliorer le site du studio, ou le respect d’obligations légales.",
          },
          {
            title: "Partage avec des prestataires",
            body:
              "Les informations peuvent être partagées uniquement avec des prestataires participant au fonctionnement du site ou des opérations du studio, comme l’hébergement, l’analytics, l’email, la prise de rendez-vous ou les outils de communication. Ces prestataires ne devraient traiter que les données nécessaires à leur fonction et sont supposés appliquer des mesures appropriées de confidentialité et de sécurité.",
          },
          {
            title: "Durée de conservation",
            body:
              "Pickles Studio conserve les données personnelles uniquement pendant la durée raisonnablement nécessaire à la finalité de leur collecte. Les emails de contact et échanges liés à un projet peuvent être conservés pour le suivi, la gestion de la relation, les obligations légales ou la continuité opérationnelle, sauf demande de suppression lorsque la conservation n’est plus nécessaire.",
          },
          {
            title: "Transferts internationaux",
            body:
              "Comme certains outils numériques et prestataires peuvent opérer depuis différents pays, certaines informations peuvent être traitées hors de votre pays de résidence. Dans ce cas, des mesures raisonnables doivent être prises pour assurer un niveau de protection approprié, notamment via des garanties contractuelles lorsque cela est requis.",
          },
          {
            title: "Vos droits",
            body:
              "Selon les lois qui vous sont applicables, vous pouvez demander l’accès à vos données personnelles, leur rectification ou suppression, vous opposer à certains traitements, demander leur limitation, retirer votre consentement lorsqu’il constitue la base du traitement ou demander la portabilité des données. Pour exercer ces droits, contactez contact@studiopickles.io.",
          },
          {
            title: "Sécurité",
            body:
              "Pickles Studio s’efforce de mettre en place des mesures techniques et organisationnelles raisonnables afin de protéger les informations personnelles contre l’accès non autorisé, la perte, l’usage abusif ou la divulgation. Aucune transmission ou conservation en ligne ne pouvant être garantie comme totalement sûre, une sécurité absolue ne peut toutefois pas être promise.",
          },
          {
            title: "Mises à jour de cette politique",
            body:
              "Cette politique de confidentialité peut être mise à jour afin de refléter des évolutions légales, opérationnelles ou liées au site. La version publiée sur cette page doit être considérée comme la plus récente, avec l’ajout d’une date d’effet lorsque la politique sera finalisée.",
          },
        ],
      },
      cookies: {
        title: "Politique de Cookies",
        intro:
          "Cette politique de cookies explique comment Pickles Studio peut utiliser les cookies et technologies similaires afin d’assurer le bon fonctionnement du site, comprendre son trafic et améliorer l’expérience de navigation.",
        sections: [
          {
            title: "Que sont les cookies",
            body:
              "Les cookies sont de petits fichiers texte déposés sur votre appareil lorsque vous consultez un site. Ils permettent notamment de mémoriser certaines informations de visite, d’assurer des fonctions essentielles, de mesurer l’usage du site et parfois de personnaliser certains aspects de l’expérience.",
          },
          {
            title: "Pourquoi des cookies peuvent être utilisés",
            body:
              "Pickles Studio peut utiliser des cookies pour faire fonctionner correctement le site, comprendre la manière dont les visiteurs l’utilisent, mémoriser des préférences simples, améliorer les performances et évaluer l’intérêt pour les services ou contenus du studio. Les cookies n’ont pas vocation à collecter plus de données que nécessaire pour ces finalités.",
          },
          {
            title: "Catégories de cookies susceptibles d’être présentes",
            body:
              "Le site peut utiliser des cookies essentiels nécessaires à son fonctionnement technique, des cookies analytics pour mesurer les visites et comportements, des cookies de performance pour soutenir la fiabilité et le chargement, ainsi que des cookies fonctionnels permettant de mémoriser certaines préférences. Si des cookies marketing ou de ciblage tiers sont ajoutés, cette politique et tout mécanisme de consentement devront être mis à jour en conséquence.",
          },
          {
            title: "Outils tiers",
            body:
              "Certains cookies peuvent être déposés par des services tiers utilisés pour faire fonctionner ou enrichir le site, par exemple des outils d’analytics, des contenus embarqués, des solutions de prise de rendez-vous ou des intégrations sociales. Ces tiers peuvent traiter certaines données d’usage selon leur propre documentation de confidentialité.",
          },
          {
            title: "Gestion des cookies",
            body:
              "Vous pouvez en général contrôler ou supprimer les cookies depuis les réglages de votre navigateur. Selon les outils présents sur le site, vous pouvez également accepter ou refuser les cookies non essentiels via un bandeau ou un panneau de préférences. Le blocage de certains cookies peut affecter le bon fonctionnement de certaines parties du site.",
          },
          {
            title: "Durée de vie des cookies",
            body:
              "Certains cookies restent actifs uniquement pendant votre session de navigation et disparaissent lorsque vous fermez votre navigateur. D’autres restent présents sur votre appareil pendant une durée déterminée afin que certaines préférences, mesures analytics ou réglages techniques puissent être reconnus lors d’une prochaine visite.",
          },
          {
            title: "Mises à jour de cette politique",
            body:
              "Cette politique de cookies peut être mise à jour lorsque le site évolue, lorsque de nouveaux outils sont ajoutés ou lorsque les exigences légales changent. La version disponible sur cette page doit être considérée comme la plus récente, avec l’ajout d’une date de révision dans la version finale publiée.",
          },
        ],
      },
    },
  },
  nl: {
    meta: {
      title: "Pickles Studio",
      description:
        "Premium product agency die strategie, design en engineering samenbrengt voor ambitieuze merken.",
    },
    navigation: {
      menu: "Menu",
      close: "Sluiten",
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
      about: "About",
      contact: "Contact",
      work: "Werk",
    },
    common: {
      cities: "Paris & Rotterdam",
      discover: "Bekijk de case study",
      liveSite: "Bezoek live project",
      backToPortfolio: "Terug naar portfolio",
      legalPlaceholder:
        "Controleer de bedrijfsidentiteit, het adres en eventuele exacte toolproviders voordat de definitieve juridische versie wordt gepubliceerd.",
    },
    hero: {
      kicker: "Premium product agency",
      sub: "Wij zijn een product agency gevestigd in Paris & Rotterdam.",
      headline:
        "We bouwen premium digitale producten voor founders, merken en teams die duidelijkheid, snelheid en vakmanschap nodig hebben.",
      ctaPrimary: "Start een project",
      ctaSecondary: "Bekijk ons werk",
    },
    home: {
      workTitle: "Selected Work",
      workIntro:
        "Een gecureerde selectie van digitale producten, launches en premium interfaces die bedrijven vooruithelpen.",
      servicesTitle: "Onze Services",
      clientsTitle: "Selected Clients",
      clientsIntro:
        "We werken met teams die product thinking, sterke uitvoering en scherpe designbeslissingen nodig hebben.",
      followTitle: "Volg ons",
      followMarquee: "FOLLOW US-",
    },
    servicesPage: {
      eyebrow: "Services",
      title:
        "Van strategie tot launch bouwen we producten met smaak en tractie.",
      intro:
        "Pickles Studio combineert product thinking, creative direction en technische uitvoering om vage ideeën om te zetten in premium digitale ervaringen.",
      cta: "Laten we je project bespreken",
    },
    aboutPage: {
      eyebrow: "About",
      title: "Een kleine premium agency voor ambitieuze digitale projecten.",
      intro:
        "Pickles Studio opereert op het kruispunt van productstrategie, design systems en shipping-ready uitvoering. We werken met founders en teams die scherpere beslissingen, een sterkere digitale presence en minder afstand tussen idee en delivery willen.",
      story:
        "Onze aanpak is bewust compact: senior thinking, duidelijke samenwerking en een sterke bias voor momentum. We blijven dicht op het product, challengen zwakke aannames en houden de craft hoog over interface, narrative en implementatie.",
      principles: [
        "Product clarity before production noise.",
        "Design that feels intentional, not decorative.",
        "Execution that respects speed without losing quality.",
      ],
      blocks: [
        {
          title: "How we work",
          body:
            "We definiëren het probleem, kaderen de kans, bepalen de productrichting en bouwen de ervaring in nauwe samenwerking met stakeholders.",
        },
        {
          title: "What we bring",
          body:
            "Product strategy, UX/UI design, premium websites, web applications en hands-on technical problem solving.",
        },
        {
          title: "Where we operate",
          body:
            "Gebaseerd tussen Paris en Rotterdam werken we internationaal met directe, lichte en besluitgerichte communicatie.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title:
        "Laten we praten over het product, platform of de launch die je hierna nodig hebt.",
      intro:
        "Of je nu een premium website, scherpere productrichting of een partner nodig hebt om een nieuwe ervaring te shippen, we kunnen starten met een gerichte conversatie.",
      cta: "contact@studiopickles.io",
      phoneLabel: "WhatsApp",
      emailLabel: "Email",
      socialLabel: "Volg ons",
      availability:
        "De huidige contactgegevens gebruiken placeholders waar definitieve merkinformatie nog niet is bevestigd.",
    },
    portfolioPage: {
      eyebrow: "Portfolio",
      title: "Geselecteerd werk gevormd door product, design en engineering.",
      intro:
        "Een gecureerde selectie van webplatforms, mobile experiences, launch websites en productgedreven brand interfaces.",
      stats: [
        { value: "+20", label: "Projects delivered" },
        { value: "6", label: "Featured case studies" },
        { value: "3", label: "Core disciplines" },
        { value: "2", label: "Cities of operation" },
      ],
    },
    projectPage: {
      overview: "Overview",
      challenge: "Challenge",
      solution: "Solution",
      impact: "Impact",
      services: "Services",
      year: "Year",
      client: "Client",
      type: "Type",
      gallery: "Gallery",
      placeholderImpact: "Outcome details to be confirmed.",
    },
    contactBlock: {
      title: "Contact",
      sitemap: "Sitemap",
      contact: "Contact details",
      follow: "Follow us",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        intro:
          "Deze privacy policy legt uit hoe Pickles Studio persoonsgegevens kan verzamelen, gebruiken en beschermen wanneer je de website bezoekt, contact opneemt met de studio of een projectgesprek start.",
        sections: [
          {
            title: "Who we are",
            body:
              "Pickles Studio is een premium product agency dat opereert tussen Paris en Rotterdam. Voor vragen over privacy of persoonsgegevens kun je momenteel contact opnemen via contact@studiopickles.io. Als er een geregistreerde bedrijfsnaam, adres of btw-nummer van toepassing is, moeten die gegevens aan de definitieve gepubliceerde versie van deze policy worden toegevoegd.",
          },
          {
            title: "What data may be collected",
            body:
              "Afhankelijk van hoe je met de website omgaat, kan Pickles Studio contactgegevens verzamelen zoals je naam, emailadres, bedrijfsnaam, telefoonnummer en alle projectinformatie die je vrijwillig deelt. Technische informatie zoals browsertype, apparaattype, benaderde locatie, referral source, bezochte pagina’s en basis analytics events kan ook automatisch worden verzameld via standaard website tools.",
          },
          {
            title: "Why data is processed",
            body:
              "Persoonsgegevens kunnen worden gebruikt om aanvragen te beantwoorden, projectgesprekken te beheren, voorstellen op te maken, de website-ervaring te verbeteren, interesse in de diensten van de studio te begrijpen, de website te beveiligen en te voldoen aan wettelijke of administratieve verplichtingen. Pickles Studio gebruikt persoonsgegevens niet voor niet-verwante doeleinden zonder geldige reden of passende rechtsgrond.",
          },
          {
            title: "Legal basis for processing",
            body:
              "Waar van toepassing verwerkt Pickles Studio persoonsgegevens op basis van een of meer van de volgende gronden: je toestemming, de noodzaak om op een verzoek te reageren vóór een contract, de uitvoering van een contract, gerechtvaardigd belang bij het beheren en verbeteren van de studio website, of naleving van wettelijke verplichtingen.",
          },
          {
            title: "Sharing with service providers",
            body:
              "Informatie kan alleen worden gedeeld met dienstverleners die helpen bij het draaien van de website of de workflows van de studio, zoals hosting providers, analytics providers, emaildiensten, planning tools of communicatieplatforms. Deze partijen zouden alleen de informatie mogen verwerken die nodig is voor hun functie en worden geacht passende vertrouwelijkheids- en beveiligingsmaatregelen toe te passen.",
          },
          {
            title: "Data retention",
            body:
              "Pickles Studio bewaart persoonsgegevens alleen zolang dat redelijkerwijs nodig is voor het doel waarvoor ze zijn verzameld. Contactemails en projectgerelateerde communicatie kunnen worden bewaard voor opvolging, relatiemanagement, wettelijke administratie of operationele continuïteit, tenzij verwijdering wordt gevraagd en bewaring niet langer nodig is.",
          },
          {
            title: "International transfers",
            body:
              "Omdat digitale tools en dienstverleners in verschillende landen kunnen opereren, kan bepaalde informatie buiten je land van verblijf worden verwerkt. In dat geval moeten redelijke stappen worden genomen om een passend beschermingsniveau te waarborgen, inclusief contractuele waarborgen waar dat vereist is.",
          },
          {
            title: "Your rights",
            body:
              "Afhankelijk van de wetgeving die op jou van toepassing is, kun je het recht hebben om toegang te vragen tot je persoonsgegevens, correctie of verwijdering te vragen, bezwaar te maken tegen bepaalde verwerkingen, beperking te vragen, toestemming in te trekken wanneer toestemming de rechtsgrond is, of dataportabiliteit te vragen. Om deze rechten uit te oefenen kun je contact opnemen via contact@studiopickles.io.",
          },
          {
            title: "Security",
            body:
              "Pickles Studio probeert redelijke technische en organisatorische maatregelen te gebruiken om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies, misbruik of openbaarmaking. Geen enkel online verzend- of opslagsysteem kan echter volledig veilig worden gegarandeerd, dus absolute veiligheid kan niet worden beloofd.",
          },
          {
            title: "Updates to this policy",
            body:
              "Deze privacy policy kan van tijd tot tijd worden bijgewerkt om juridische, operationele of websitegerelateerde veranderingen weer te geven. De meest recente versie hoort altijd de versie te zijn die op deze pagina is gepubliceerd, met een effectieve datum zodra de policy definitief is gemaakt.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        intro:
          "Deze cookie policy legt uit hoe Pickles Studio cookies en vergelijkbare technologieën kan gebruiken om de website goed te laten werken, verkeer te begrijpen en de browse-ervaring te verbeteren.",
        sections: [
          {
            title: "What cookies are",
            body:
              "Cookies zijn kleine tekstbestanden die op je toestel worden geplaatst wanneer je een website bezoekt. Ze helpen websites informatie over je bezoek te onthouden, kernfunctionaliteit te ondersteunen, gebruik te meten en soms bepaalde delen van de ervaring te personaliseren.",
          },
          {
            title: "Why cookies may be used",
            body:
              "Pickles Studio kan cookies gebruiken om de website correct te laten functioneren, te begrijpen hoe bezoekers de site gebruiken, eenvoudige voorkeuren te onthouden, prestaties te verbeteren en interesse in de diensten of content van de studio te evalueren. Cookies zijn niet bedoeld om meer gegevens te verzamelen dan redelijkerwijs nodig is voor deze doeleinden.",
          },
          {
            title: "Types of cookies that may be present",
            body:
              "De website kan essentiële cookies gebruiken die nodig zijn voor technische werking, analytics cookies die helpen bezoeken en gedrag te meten, performance cookies die betrouwbaarheid en laadsnelheid ondersteunen, en functionele cookies die eenvoudige voorkeuren onthouden. Als marketing- of third-party targeting cookies ooit worden toegevoegd, moeten deze policy en eventuele consentmechanismen dienovereenkomstig worden bijgewerkt.",
          },
          {
            title: "Third-party services",
            body:
              "Sommige cookies kunnen worden geplaatst door third-party diensten die worden gebruikt om de website te laten functioneren of te verrijken, zoals analytics tools, embedded content, planning software of social media integraties. Deze derden kunnen bepaalde gebruiksgegevens verwerken volgens hun eigen privacydocumentatie.",
          },
          {
            title: "How to manage cookies",
            body:
              "Je kunt cookies doorgaans beheren of verwijderen via de instellingen van je browser. Afhankelijk van de tools die op de site worden gebruikt, kun je niet-essentiële cookies mogelijk ook accepteren of weigeren via een consent banner of instellingenpaneel. Het blokkeren van bepaalde cookies kan invloed hebben op hoe delen van de website functioneren.",
          },
          {
            title: "Cookie duration",
            body:
              "Sommige cookies blijven alleen actief tijdens je browsersessie en verdwijnen wanneer je je browser sluit. Andere blijven gedurende een bepaalde periode op je toestel staan zodat voorkeuren, analytics of technische instellingen kunnen worden herkend wanneer je terugkeert.",
          },
          {
            title: "Updates to this policy",
            body:
              "Deze cookie policy kan worden bijgewerkt wanneer de website verandert, wanneer nieuwe tools worden toegevoegd of wanneer wettelijke vereisten evolueren. De versie op deze pagina moet worden beschouwd als de meest recente, met een revisiedatum in de definitieve gepubliceerde versie.",
          },
        ],
      },
    },
  },
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
    link: "https://wa.me/+33644167776",
  },
  {
    name: { en: "Mail", fr: "Mail", nl: "Mail" },
    link: "mailto:contact@studiopickles.io",
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
      en: ["Subscription-ready platform", "Scalable content management", "+420% new users in 3 months"],
      fr: ["Plateforme prête pour l’abonnement", "Gestion de contenu scalable", "+420% de nouveaux utilisateurs en 3 mois"],
      nl: ["Subscription-ready platform", "Scalable content management", "+420% new users in 3 months"],
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
    externalUrl: "https://edmc.io/dropper/",
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
    externalUrl: "https://edmc.io/",
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
    externalUrl: "https://mbuzzesports.com/",
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
