import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/70 border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif font-bold text-gray-800">Klausk žvaigždžių</Link>
        <div className="space-x-6">
          <Link href="/apie" className="text-gray-800 hover:text-indigo-600">Apie</Link>
          <Link href="/paslaugos" className="text-gray-800 hover:text-indigo-600">Paslaugos</Link>
          <Link href="/straipsniai" className="text-gray-800 hover:text-indigo-600">Straipsniai</Link>
          <Link href="/menulio-kalendorius" className="text-gray-800 hover:text-indigo-600">Mėnulio kalendorius</Link>
          <Link href="/kontaktai" className="text-gray-800 hover:text-indigo-600">Kontaktai</Link>
        </div>
      </div>
    </nav>
  );
}
