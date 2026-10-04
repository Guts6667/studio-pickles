
import { redirect } from "next/navigation";
import { defaultLocale } from "./lib/site";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
