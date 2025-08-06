import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 min-h-screen text-gray-800">
      <header className="sticky top-0 backdrop-blur-md bg-white/30 p-4 flex justify-between items-center z-10 border-b border-white/30">
        <h1 className="font-serif text-2xl">Klausk žvaigždžių</h1>
        <nav className="space-x-6 font-serif text-lg">
          <Link href="/apie" className="hover:underline">Apie</Link>
          <Link href="/paslaugos" className="hover:underline">Paslaugos</Link>
          <Link href="/straipsniai" className="hover:underline">Straipsniai</Link>
          <Link href="/menulio-kalendorius" className="hover:underline">Mėnulio kalendorius</Link>
          <Link href="/kontaktai" className="hover:underline">Kontaktai</Link>
        </nav>
      </header>
      <main className="p-8">
        <section className="text-center py-24">
          <h2 className="font-serif text-5xl mb-4">Išgirsk žvaigždžių paslaptis</h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            Sveiki! Esu astrologas Justinas Mažuika, kuris kviečia jus atrasti žvaigždžių išmintį.
            Kiekviena konsultacija – tai kelionė į gilesnį savęs pažinimą, paremta Mėnulio fazėmis ir planetų judėjimais.
          </p>
          <Link href="/paslaugos" className="inline-block px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
            Sužinokite daugiau
          </Link>
        </section>
        <section className="grid md:grid-cols-3 gap-8">
          <Link href="/apie" className="bg-white/70 border border-gray-200 rounded-xl p-6 backdrop-blur-md hover:bg-white/90 transition">
            <h3 className="font-serif text-2xl mb-2">Apie Mane</h3>
            <p>Sužinokite apie mano kelionę, patirtį ir filosofiją.</p>
          </Link>
          <Link href="/paslaugos" className="bg-white/70 border border-gray-200 rounded-xl p-6 backdrop-blur-md hover:bg-white/90 transition">
            <h3 className="font-serif text-2xl mb-2">Paslaugos</h3>
            <p>Asmeninės konsultacijos, prognozės ir suderinamumo analizės.</p>
          </Link>
          <Link href="/straipsniai" className="bg-white/70 border border-gray-200 rounded-xl p-6 backdrop-blur-md hover:bg-white/90 transition">
            <h3 className="font-serif text-2xl mb-2">Straipsniai</h3>
            <p>Skaitykite gilius ir įkvepiančius astrologijos straipsnius.</p>
          </Link>
        </section>
        <section className="mt-16 text-center">
          <h2 className="font-serif text-4xl mb-4">Mėnulio kalendorius</h2>
          <p>Sužinokite, kokią energiją skleidžia kiekviena Mėnulio fazė.</p>
          <Link href="/menulio-kalendorius" className="inline-block mt-4 px-5 py-2 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
            Peržiūrėti kalendorių
          </Link>
        </section>
        <section className="mt-16 text-center">
          <h2 className="font-serif text-4xl mb-4">Prisijunk prie naujienlaiškio</h2>
          <p>Prenumeruok savaitinius horoskopus ir naujausius straipsnius.</p>
          <form action="#" className="mt-4 inline-flex">
            <input type="email" placeholder="El. pašto adresas" className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none" />
            <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700">Prenumeruoti</button>
          </form>
        </section>
      </main>
    </div>
  );
}
