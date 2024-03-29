import Script from "next/script";
import Header from './Components/Header';
import Footer from './Components/Footer';

export const metadata = {
  title: "StudentStash Exchange",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
