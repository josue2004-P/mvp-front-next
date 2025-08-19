// utils/getSubdomain.ts
export const getSubdomain = () => {
  if (typeof window === 'undefined') return null; // Server-side protection
  const host = window.location.host; // ej: "admin.localhost:3000"
  const subdomain = host.split('.')[0]; // "admin"
  return subdomain;
};
