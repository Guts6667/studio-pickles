
import { permanentRedirect } from "next/navigation";
import { defaultLocale } from "./lib/site";

export default function RootPage() {
  permanentRedirect(`/${defaultLocale}`);
}
