"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavbarClient() {
  const { data: session, status } = useSession();

  // status puede ser 'loading', 'authenticated' o 'unauthenticated'
  if (status === "loading") {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Mi App</h1>
        <p>Cargando...</p>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Mi App</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">Inicio</Link>

        {!session && (
          <>
            <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
            <Link href="/register" className="text-blue-500 hover:underline">Registrar</Link>
          </>
        )}

        {session && (
          <>
            {session.user.role === "admin" && (
              <Link href="/admin" className="text-blue-500 hover:underline">Dashboard</Link>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-red-500 hover:underline"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
