"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/src/presentation/auth/LoginForm";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function LoginPage() {
  const { checking, user } = useAuth();
  const router = useRouter();

  // Hook para redirigir si ya está logueado
  useEffect(() => {
    if (!checking && user.isLoggedIn) {
      router.push("/"); // redirige al home
    }
  }, [checking, user, router]);


  // Si ya está logueado, renderizamos null (el useEffect se encargará de redirigir)
  if (user.isLoggedIn) return null;

  // Solo mostrar el formulario si NO está logueado
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}
