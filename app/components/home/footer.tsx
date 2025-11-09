import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-azul p-8 text-center"> 
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-blanco opacity-50 mt-16">
          © {new Date().getFullYear()} MINISTERIO DEL INTERIOR.<br>
          </br> Dirección General de la Policía.<br>
          </br>Cuerpo Nacional de Policía.
        </p>
      </div>
    </footer>
  );
}