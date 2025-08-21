"use client";
import { useAuth } from "@/src/presentation/auth/useAuth";

export default function UserInfo() {
  const { user, protectGuest, checking } = useAuth();
  protectGuest();

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sistema de Reporte de Incidencias de Equipos Médicos
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Optimiza la gestión de incidencias en equipos médicos y asegura la
            continuidad en la atención al paciente.
          </p>
          <a
            href="#contacto"
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
          >
            Solicitar Demo
          </a>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">¿Qué es el sistema?</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
          El <strong>Sistema de Reporte de Incidencias de Equipos Médicos</strong>
          permite a hospitales, clínicas y centros de salud registrar fallos o
          problemas, dar seguimiento a las reparaciones y generar reportes
          automáticos en tiempo real.
        </p>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicios que ofrece
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Registro en tiempo real</h3>
              <p>Permite reportar fallos desde cualquier dispositivo.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Clasificación automática</h3>
              <p>Prioriza incidencias según su nivel de urgencia.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">
                Asignación de responsables
              </h3>
              <p>El sistema asigna al técnico adecuado de forma automática.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">
                Notificaciones instantáneas
              </h3>
              <p>Alertas en tiempo real al personal responsable.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Historial y reportes</h3>
              <p>Registro completo de incidencias y estadísticas gráficas.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Mantenimiento preventivo</h3>
              <p>Agenda revisiones antes de que ocurran fallas críticas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Beneficios principales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            🚑 Mayor seguridad para los pacientes
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            ⏳ Reducción del tiempo de inactividad
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            📊 Reportes en tiempo real para decisiones estratégicas
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            💰 Ahorro en costos de reparación
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            👨‍⚕️ Confianza del personal médico
          </div>
          <div className="p-4 border-l-4 border-blue-600 bg-white shadow rounded">
            🔒 Centralización de la información
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-2xl p-6">
              <p className="italic mb-4">
                "Los tiempos de respuesta a fallos se redujeron en un 60%."
              </p>
              <h4 className="font-semibold">Dr. Juan Ramírez</h4>
              <span className="text-gray-500">Hospital General</span>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <p className="italic mb-4">
                "La generación de reportes automáticos nos ayuda a justificar
                presupuestos y mejorar la gestión."
              </p>
              <h4 className="font-semibold">Lic. María López</h4>
              <span className="text-gray-500">Administradora de Clínica</span>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <p className="italic mb-4">
                "Antes era complicado llevar control, ahora todo queda registrado
                y es más fácil dar seguimiento."
              </p>
              <h4 className="font-semibold">Ing. Carlos Méndez</h4>
              <span className="text-gray-500">Técnico Biomédico</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Optimiza la gestión de tus equipos médicos
        </h2>
        <p className="mb-8 text-lg">
          Solicita una demostración gratuita y descubre cómo nuestro sistema puede
          transformar la seguridad y eficiencia de tu institución.
        </p>
        <a
          href="#"
          className="bg-green-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600"
        >
          Contactar Ventas
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>
          &copy; 2025 Sistema de Reporte de Incidencias Médicas. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
