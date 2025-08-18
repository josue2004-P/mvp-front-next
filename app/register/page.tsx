"use client";
import RegisterForm from "@/src/presentation/auth/RegisterForm";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function RegisterPage() {
  const { protectGuest, checking } = useAuth();
  protectGuest();

  if (checking) return <p>Cargando...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
  );
}
