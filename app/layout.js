import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js test app</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
