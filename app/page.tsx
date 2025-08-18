import Link from "next/link";

export default function PublicPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Página Pública 🌎</h1>
      <p>Esta página puede verla cualquier persona.</p>
      <Link href="/admin" className="mt-4 inline-block text-blue-500">
        Ir al Dashboard de Admin
      </Link>
    </>
  );
}
