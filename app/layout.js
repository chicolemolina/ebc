import "./globals.css";
import Navbar from "./components/Navbar";
import SideBarNav from "./components/SidebarNav";
<<<<<<< HEAD
import Footer from "./components/footer";

=======
import ButtonPwa from "./components/ButtonPwa";
>>>>>>> 89c58de63b3c79364c5f04bd4b2231bd24c54a61


export const metadata = {
  title: "EBC APP",
  description: "Excellence Business Club",
  manifest:"/manifest.json",
  icons: {

    apple:"/icon.png"

  },
  themecolor:"#181c32"
};

export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <Navbar />
        <SideBarNav />
        {children}
<<<<<<< HEAD
        <Footer />
=======
        <ButtonPwa />
>>>>>>> 89c58de63b3c79364c5f04bd4b2231bd24c54a61
        </body>
    </html>
    
  );
}

