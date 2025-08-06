import React from 'react';
import Navbar from '../components/Navbar';

export default function Kontaktai() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen p-8 pt-24 text-gray-800">
        <h1 className="font-serif text-4xl mb-6 text-center">Kontaktai</h1>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>
            Jei norite pasikonsultuoti ar užsisakyti paslaugą, rašykite el. paštu
            <a href="mailto:justinas@klauskzvaigzdziu.lt" className="text-blue-600 underline ml-1">justinas@klauskzvaigzdziu.lt</a>.
          </p>
          <p>Sekite mane ir socialiniuose tinkluose:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://www.facebook.com/klauskzvaigzdziu" className="text-blue-600 underline">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/klauskzvaigzdziu" className="text-blue-600 underline">Instagram</a>
            </li>
          </ul>
          <div className="pt-6">
            <iframe
              src="https://ml.s7.exacttarget.com/your-form-id"
              width="100%"
              height="500"
              className="w-full border-none"
              title="MailerLite form"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
