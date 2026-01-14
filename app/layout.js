import { Poppins } from "next/font/google"; 
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start-2p",
});

export const metadata = {
  title: "Pokedex Online",
  description: "Explore the Pokédex with its Pokémon stats, types, and abilities. Find your favorite Pokémon today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${pressStart2P.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
