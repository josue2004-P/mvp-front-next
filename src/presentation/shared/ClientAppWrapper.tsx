"use client";

import ReduxProviderWrapper from "./ReduxProviderWrapper";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function ClientAppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProviderWrapper>
      <AuthWrapper>{children}</AuthWrapper>
    </ReduxProviderWrapper>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { checking } = useAuth(); // obtiene estado de verificación de token

  if (checking) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">Cargando...</p>
      </div>
    );
  }

  return <>{children}</>; // renderiza la app solo cuando terminó la verificación
}
