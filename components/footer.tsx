import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-umber-900 text-parchment-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-parchment-100 mb-4">
              Cabañas Guardiamó
            </h3>
            <p className="text-parchment-200 mb-4 leading-relaxed">
              Experiencia all-inclusive en el corazón de Chiloé. Descubre la magia de Quemchi 
              con nuestro programa completo de 7 días y 6 noches.
            </p>
            <div className="flex items-center text-parchment-200 mb-2">
              <MapPin className="h-4 w-4 mr-2 text-parchment-300" />
              <span>Quemchi, Chiloé, Chile</span>
            </div>
            <div className="flex items-center text-parchment-200">
              <Phone className="h-4 w-4 mr-2 text-parchment-300" />
              <span>+569 9361 5655</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-parchment-100 mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/cabanas" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Cabañas
                </Link>
              </li>
              <li>
                <Link 
                  href="/programa" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Programa
                </Link>
              </li>
              <li>
                <Link 
                  href="/galeria" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link 
                  href="/ubicacion" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Ubicación
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className="text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes sociales */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-parchment-100 mb-4">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://wa.me/56993615655" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-parchment-200 hover:text-green-400 transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="mailto:leonortega@hotmail.com" 
                  className="flex items-center text-parchment-200 hover:text-parchment-100 transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Email</span>
                </a>
              </div>
              
              <div className="pt-4">
                <h5 className="font-medium text-parchment-100 mb-2">Síguenos</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/cabanasguardiamo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-parchment-200 hover:text-pink-400 transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/cabanasguardiamo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-parchment-200 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-umber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-parchment-300 text-sm">
              © 2025 Cabañas Guardiamó. Todos los derechos reservados.
            </p>
            <p className="text-parchment-300 text-sm mt-4 md:mt-0">
              Hecho por{" "}
              <a
                href="https://www.daspix.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-parchment-200 underline transition-colors duration-200"
              >
                DasPix by Daniel Shinya
              </a>
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link 
                href="/privacidad" 
                className="text-parchment-300 hover:text-parchment-200 text-sm transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/terminos" 
                className="text-parchment-300 hover:text-parchment-200 text-sm transition-colors duration-200"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
