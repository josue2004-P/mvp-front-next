"use client";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function AdminPage() {
  const { user, protectRoute, checking } = useAuth();
  protectRoute();

  if (checking) return <p>Cargando...</p>; // muestra mensaje mientras valida

  return (
    <div>
      <h1>Bienvenido, {user.id}</h1>
      <p>Esta es tu página de admin</p>
    </div>
  );
}
