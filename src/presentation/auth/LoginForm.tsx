"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { onLogin } from "@/store/slices/userSlice";
import { LoginUseCase } from "@/src/application/auth/LoginUseCase";
import { LoginDto } from "@/src/application/auth/dto/LoginDto";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const loginUseCase = new LoginUseCase();
    const loginData: LoginDto = { email, password };

    try {
      const data = await loginUseCase.execute(loginData);

      console.log(data.profiles)

      // 1️⃣ Guardar token en cookie (opcional, si backend no lo hace httpOnly)
      Cookies.set("token", data.token, { expires: 1 });

      // 2️⃣ Guardar info del usuario en Redux
      dispatch(
        onLogin({
          id:data.user.id,
          token: data.token,
          profiles: data.profiles || [],
        })
      );

      alert("Login exitoso!");
    } catch (error: any) {
      // Convertir error a string para React
      const message =
        error?.response?.data?.msg || error?.message || "Error desconocido";
      setErrorMsg(message);

      dispatch(onLogin({ id: 0, token: "", profiles: [] }));
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 border rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
