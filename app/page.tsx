"use client";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function UserInfo() {

    const { user,protectGuest, checking } = useAuth();
    protectGuest();
  
    if (checking) return <p>Cargando...</p>;

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Token: {user.token}</p>
      <p>Profiles: {user.profiles.length}</p>
    </div>
  );
}
