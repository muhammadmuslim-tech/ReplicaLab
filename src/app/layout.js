import Footer from "@/src/components/Footer/Footer.jsx";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer />
      </body>
    </html>
  );
}