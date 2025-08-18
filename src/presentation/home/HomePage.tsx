"use client";
import { useEffect, useState } from "react";
import { ShowHomePage } from "@/src/application/home/ShowHomePage";

export default function HomePage() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const homeUseCase = new ShowHomePage();
    setMessage(homeUseCase.execute());
  }, []);

  if (message === null) {
    return <div className="p-6">Cargando...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Página de Inicio</h1>
      <p>{message}</p>
    </div>
  );
}
