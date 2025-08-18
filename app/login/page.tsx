

"use client";
import { useAuth } from "@/src/presentation/auth/useAuth";
import LoginForm from "@/src/presentation/auth/LoginForm";

export default function LoginPage() {
  const { protectGuest, checking } = useAuth();
  protectGuest();

  if (checking) return <p>Cargando...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}

