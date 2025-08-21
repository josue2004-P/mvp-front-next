"use client";
import { useAuth } from "@/src/presentation/auth/useAuth";
import Navbar from "@/src/presentation/shared/Navbar";

export default function AdminPage() {
  const { user, protectRoute, checking } = useAuth();
  protectRoute();

  return (
    <div>
      <Navbar/>
      <h1>Bienvenido, {user.id}</h1>
      <p>Esta es tu página de admin</p>
    </div>
  );
}
