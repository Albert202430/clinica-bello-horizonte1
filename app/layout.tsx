import Header from './components/Header';
import OfertaPopup from './components/OfertaPopup';
import Footer from './components/Footer'; // Ajusta la ruta según dónde creaste la carpeta
import WhatsAppFloat from './components/WhatsAppFloat';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header /> {/* El Header se renderiza arriba de todo */}
        <main>{children}</main>
        <OfertaPopup />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}