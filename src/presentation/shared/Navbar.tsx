"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { onLogout } from "@/store/slices/userSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // 1️⃣ Limpiar Redux
    dispatch(onLogout());
    // 2️⃣ Borrar token de cookies
    Cookies.remove("token");
    // 3️⃣ Redirigir a login
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Mi App</div>
      <div className="space-x-4">
        <Link href="/">Inicio</Link>
        {!user.isLoggedIn && <Link href="/login">Login</Link>}
        {!user.isLoggedIn && <Link href="/register">Registrar</Link>}
        {user.isLoggedIn && <Link href="/admin">Admin</Link>}
        {user.isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}
