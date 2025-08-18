import "./globals.css";
import Navbar from "@/src/presentation/shared/Navbar";
import ClientAppWrapper from "@/src/presentation/shared/ClientAppWrapper";

export const metadata = {
  title: "Mi App",
  description: "Demo Next.js con Navbar y Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body  cz-shortcut-listen="true">
        <ClientAppWrapper>
          <Navbar />
          <main>{children}</main>
        </ClientAppWrapper>
      </body>
    </html>
  );
}
