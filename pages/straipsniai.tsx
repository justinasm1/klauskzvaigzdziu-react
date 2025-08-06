import React from 'react';
import Navbar from '../components/Navbar';

export default function Straipsniai() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen p-8 pt-24 text-gray-800">
        <h1 className="font-serif text-4xl mb-6 text-center">Straipsniai</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white bg-opacity-80 hover:shadow-lg transition-shadow">
            <h2 className="font-semibold text-xl mb-2">Saturno ciklai ir jų įtaka asmeniniam augimui</h2>
            <p className="mb-2">Išsamiai apie Saturno grįžimų ritmus ir jų įtaką asmeniniam augimui bei brandai.</p>
            <a href="#" className="text-blue-600 underline">Skaityti straipsnį</a>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white bg-opacity-80 hover:shadow-lg transition-shadow">
            <h2 className="font-semibold text-xl mb-2">Mėnulio fazės: kiekvienos savaitės energetika</h2>
            <p className="mb-2">Sužinokite, kaip Mėnulio ciklas veikia mūsų emocijas ir kasdienes veiklas per savaitę.</p>
            <a href="#" className="text-blue-600 underline">Skaityti straipsnį</a>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white bg-opacity-80 hover:shadow-lg transition-shadow">
            <h2 className="font-semibold text-xl mb-2">2025 metų astrologinė apžvalga</h2>
            <p className="mb-2">Metinė planetų judėjimo analizė: kokių iššūkių ir galimybių laukti 2025 metais.</p>
            <a href="#" className="text-blue-600 underline">Skaityti straipsnį</a>
          </div>
        </div>
      </div>
    </>
  );
}
