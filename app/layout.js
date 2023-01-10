import Footer from "../components/Footer";
import Header from "../components/Header";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="ext-gray-700">
        <Header />
        <main id="content" className="container xl:max-w-6xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
