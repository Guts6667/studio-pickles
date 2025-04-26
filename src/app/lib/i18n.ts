// src/lib/i18n.ts

// 1) Tes types reflétant exactement ton JSON
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

// 2) Impor​​t statique de tes JSON
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import nl from "../../messages/nl.json";

// 3) Map locale → données
const messagesMap: Record<string, Messages> = {
  en,
  fr,
  nl,
};

export default async function getMessages(locale: string): Promise<Messages> {
  // 4) On renvoie directement l’objet, ou fallback à "en"
  return messagesMap[locale] ?? messagesMap.en;
}