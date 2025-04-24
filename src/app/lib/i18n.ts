type Messages = Record<string, any>;

export default async function getMessages(locale: string): Promise<Messages> {
  // locale = "en" ou "fr"
  return (await import(`@/messages/${locale}.json`)).default;
}