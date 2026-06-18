import "./globals.css";

export const metadata = {
  title: "Pickles Studio",
  description:
    "Pickles Studio is a premium product agency building elegant digital experiences from strategy to launch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
