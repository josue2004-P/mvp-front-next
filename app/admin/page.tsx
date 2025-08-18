import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Acceso denegado ❌</h1>
        <Link href="/">Volver a la página pública</Link>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Admin 🛠️</h1>
      <p>Bienvenido, {session.user.name}.</p>
      <Link href="/">Ir a página pública</Link>
    </main>
  );
}
