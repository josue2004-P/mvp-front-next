// components/NavbarWrapper.tsx (Client Component)
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import NavbarClient from "./NavbarClient";

export default function NavbarWrapper() {
  return (
    <SessionProvider>
      <NavbarLoader />
    </SessionProvider>
  );
}

// Componente interno para manejar la carga de sesión
function NavbarLoader() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  return <NavbarClient />;
}
