import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});

export const metadata = {
   title: "Infirmière Colmar 68000 - Soins à domicile",
   description:
      "Infirmières libérales diplômées d'État et conventionnées pour vos soins sur prescription médicale à Colmar et dans le Haut-Rhin",
   keywords:
      "infirmière, soins à domicile, Colmar, 68000, Haut-Rhin, infirmière libérale",
   openGraph: {
      title: "Infirmière Colmar 68000",
      description:
         "Infirmières libérales diplômées d'État et conventionnées pour vos soins sur prescription médicale",
      images: [
         {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
         },
      ],
      locale: "fr_FR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Infirmière Colmar 68000",
      description:
         "Infirmières libérales diplômées d'État et conventionnées pour vos soins sur prescription médicale",
      images: ["/og-image.jpg"],
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <head>
            <link rel="icon" type="image/png" href="/favicon-32x32.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#f3bfc5" />
         </head>
         <body
            className={`${montserrat.variable} antialiased relative isolate after:content-[''] after:fixed after:top-0 after:left-0 after:w-full after:h-full after:bg-linear-to-b after:from-background-light after:to-background after:-z-10`}
            suppressHydrationWarning={true}
         >
            <HeaderWrapper />
            <main className="min-h-screen">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
