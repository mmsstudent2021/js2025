import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
