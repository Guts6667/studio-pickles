// src/app/lib/i18n.ts

// 1) Définis exactement tes types d’après la structure de ton JSON
export interface NavMessages {
  home: string;
  about: string;
  services: string;
  work: string;
  contact: string;
}

export interface HeroMessages {
  sub: string;
  headline: string;
}

export interface OurServicesMessages {
  title: string;
  services: string[];
}

export interface OurClientsMessages {
  title: string;
}

export type Messages = {
  nav: NavMessages;
  hero: HeroMessages;
  ourServices: OurServicesMessages;
  ourClients: OurClientsMessages;
};

// 2) Import statiquement CHAQUE fichier JSON
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import nl from "../../messages/nl.json";

// 3) Map locale → objet Messages
const messagesMap: Record<"en" | "fr" | "nl", Messages> = {
  en,
  fr,
  nl,
};

export default async function getMessages(
  locale: string
): Promise<Messages> {
  // 4) On renvoie directement le bon objet ou on retombe sur l’anglais
  return messagesMap[locale as keyof typeof messagesMap] ?? messagesMap.en;
}