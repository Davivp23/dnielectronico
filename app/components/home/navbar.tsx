"use client"
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-azul p-4 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-blanco font-terminator font-bold flex flex-col">
          <Link href="#hero">
            <h1 className="text-s">Cuerpo Nacional de Policia</h1>
          </Link>
          <h2 className="text-s">51.212.479</h2>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-blanco hover:opacity-70 text-s"><h2>Inicio</h2></Link>
          <Link href="#" className="text-blanco hover:opacity-70 text-s"><h2>Mapa web</h2></Link>
          <Link href="#" className="text-blanco hover:opacity-70 text-s"><h2>Contactar</h2></Link>
          <Link href="#" className="text-blanco hover:opacity-70 text-s"><h2>Aviso Legal</h2></Link>
          <Link href="#" className="text-blanco hover:opacity-70 text-s"><h2>Accesibilidad</h2></Link>
        </div>
      </div>
    </nav>
  );
}