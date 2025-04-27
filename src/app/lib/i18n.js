
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import nl from "../../messages/nl.json";


export default function getMessages(locale) {
  const map = { en, fr, nl };
  return map[locale] || map.en;
}