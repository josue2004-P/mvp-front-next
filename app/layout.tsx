// app/layout.tsx (Server Component)
import "./globals.css";
import NavbarWrapper from "../components/NavbarWrapper";

export const metadata = {
  title: "Mi App",
  description: "Demo Next.js con navbar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <NavbarWrapper />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
