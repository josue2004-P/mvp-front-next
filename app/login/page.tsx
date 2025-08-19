"use client";

import { useState } from "react";
import LoginForm from "@/src/presentation/auth/LoginForm";
import { getSubdomain } from "@/utils/getSubdomain";

export default function LoginPage() {
  const [response, setResponse] = useState<any>(null);

  const handleLogin = async (email: string, password: string) => {
    const subdomain = getSubdomain();
    console.log("Subdomain:", subdomain);

    try {
      const res = await fetch("http://localhost:3000/api/v1/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Subdomain": subdomain || "",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response:", data);
      setResponse(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button className="cursor-pointer bg-red-300 px-2 py-1 rounded-md shadow-xl" onClick={()=> {
        handleLogin("pedro@example.com","pedro")}}>
    Iniciar Sesion
      </button>
      {/* <LoginForm onSubmit={handleLogin} /> */}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
