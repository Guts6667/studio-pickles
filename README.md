# Pickles Studio

Site vitrine multilingue de Pickles Studio, construit avec Next.js et React. Le français est la langue par défaut ; les versions anglaise et néerlandaise sont accessibles sous `/en` et `/nl`. Le portfolio présente six projets.

Adresse publique : [www.studiopickles.io](https://www.studiopickles.io). Le site est hébergé sur Vercel ; un push sur la branche GitHub `main` déclenche le déploiement de production.

## Développement et vérification

Node.js 20.9 ou plus récent est requis.

```bash
yarn install
cp .env.example .env.local
yarn dev
```

Le serveur de développement est accessible sur [localhost:3000](http://localhost:3000). Pour vérifier une version destinée à la publication :

```bash
yarn run check
yarn build
yarn start
```

Puis, dans un autre terminal :

```bash
yarn verify:site
```

Ce contrôle parcourt les 42 pages publiques et vérifie notamment les langues, les métadonnées, les liens, les mentions légales, le sitemap, les règles d’indexation et les erreurs 404. Après le déploiement :

```bash
yarn verify:site https://www.studiopickles.io
```

## Configuration et informations professionnelles

Le fichier `.env.example` documente les options principales, à renseigner dans les variables d’environnement Vercel si nécessaire :

| Variable | Utilisation |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origine HTTPS publique, par défaut `https://www.studiopickles.io`, utilisée pour les URL canoniques, les langues alternatives, le sitemap et les partages. |
| `GOOGLE_SITE_VERIFICATION` | Code de vérification HTML fourni par Google Search Console, sans la balise complète. Facultatif si la propriété est vérifiée par DNS. |
| `SITE_INDEXING_ENABLED` | `false` pour bloquer l’indexation d’un environnement de test ; `true` en production. Les déploiements Preview Vercel sont exclus automatiquement. |

Les coordonnées, l’identité de l’entreprise et l’hébergeur sont centralisés dans `src/app/lib/business.js`, avec des valeurs modifiables par variables d’environnement. Les informations `NEXT_PUBLIC_` sont publiques : ne jamais y placer de secret.

Les mentions légales identifient **Rayan Chambet EI**, entrepreneur individuel au régime micro-entreprise, avec le SIREN **820 401 990**, le SIRET **820 401 990 00024** et l’adresse professionnelle **59 rue de Ponthieu, 75008 Paris**. Montpellier, Paris et Rotterdam sont présentées comme des zones d’intervention pour les services web et digitaux. Le numéro de TVA peut être renseigné avec `NEXT_PUBLIC_BUSINESS_VAT_NUMBER` s’il s’applique. L’identité de l’hébergeur Vercel est documentée dans sa [politique de confidentialité](https://vercel.com/legal/privacy-notice) et sa [page de contact juridique](https://vercel.com/legal/dmca-policy).

## Référencement Google

Le site fournit des titres et descriptions par page, des URL canoniques, les alternatives de langue, des données structurées, [robots.txt](https://www.studiopickles.io/robots.txt) et un [sitemap XML](https://www.studiopickles.io/sitemap.xml). Montpellier, Paris et Rotterdam apparaissent dans les contenus et la zone desservie des données structurées.

La propriété **Préfixe d’URL** `https://www.studiopickles.io/` a été validée dans Google Search Console le 4 octobre 2026, et `sitemap.xml` a été envoyé. Le fichier `public/google7e22f4b13867d8b5.html`, fourni par Google, doit être conservé pour maintenir le statut de propriétaire. Cette méthode ne nécessite pas de variable `GOOGLE_SITE_VERIFICATION`. L’envoi du sitemap ne confirme pas à lui seul sa lecture ni l’indexation : consulter l’état dans Search Console.

Pour configurer une autre propriété ou consulter les résultats :

1. Ajouter le site dans Google Search Console. Pour une propriété **Domaine** `studiopickles.io`, ajouter le TXT demandé dans les DNS Squarespace. Pour une propriété **Préfixe d’URL** `https://www.studiopickles.io/`, renseigner le code HTML dans `GOOGLE_SITE_VERIFICATION`, redéployer puis valider la propriété.
2. Envoyer `sitemap.xml` dans la rubrique **Sitemaps**. Google explique cette étape dans son [guide des sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
3. Inspecter `https://www.studiopickles.io/fr` et demander son indexation, puis suivre les rapports de pages et de performances.

Ces éléments permettent la découverte et l’exploration du site ; ils ne garantissent ni l’indexation immédiate ni une position dans les résultats.

Une fiche d’établissement Google peut compléter la présence locale si l’activité reçoit des clients ou se déplace réellement chez eux. Une adresse de domiciliation ne doit pas être présentée comme un établissement accueillant le public. Consulter les [consignes officielles de Google](https://support.google.com/business/answer/3038177?hl=fr) avant de créer cette fiche.

## Réception des emails

L’adresse publiée est `contact@studiopickles.io`. Le domaine est géré dans Squarespace et les enregistrements MX Mailgun existants correspondent à son service de redirection.

Dans **Squarespace Domains → studiopickles.io → Email → Email Forwarding**, créer ou vérifier la règle de l’alias `contact` vers la boîte de réception choisie. Valider le lien envoyé à cette boîte, puis tester un message vers `contact@studiopickles.io` depuis **une autre adresse email**. Squarespace annonce un délai d’activation de 24 à 48 heures après validation ; conserver les enregistrements de redirection existants. Voir le [guide officiel Squarespace](https://support.squarespace.com/hc/en-us/articles/19000909092237-Email-forwarding-with-a-Squarespace-domain).

La redirection permet de recevoir les demandes. L’envoi de messages avec `contact@studiopickles.io` comme expéditeur nécessite une messagerie ou une configuration d’envoi adaptée. La boîte de destination reste privée et n’est pas publiée dans le site ni dans ce document.
