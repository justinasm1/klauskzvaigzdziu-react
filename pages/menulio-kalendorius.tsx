import React from 'react';
import Navbar from '../components/Navbar';

const days = [
  {
    date: '2025-08-02',
    phase: 'Jaunatis Liūte',
    description: 'Kūrybos pradžios metas – ideali diena naujiems projektams ir iniciatyvoms.'
  },
  {
    date: '2025-08-09',
    phase: 'Pilnatis Ožiaragyje',
    description: 'Pabaigų, paleidimo ir pasiekimų ġsisavinimo laikas. Švieskite ir dalinkitės.'
  },
  {
    date: '2025-08-17',
    phase: 'Delčia Avine',
    description: 'Laikas apmąstymams ir jėgų taupymui; atsakingas požiūris padeda.'
  },
  {
    date: '2025-08-24',
    phase: 'Priešpilnis Skorpione',
    description: 'Gilūs jausmai, intuicija ir pasiruošimas naujam ciklui.'
  }
];

export default function MenulioKalendorius() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen p-8 pt-24 text-gray-800">
        <h1 className="font-serif text-4xl mb-6 text-center">Mėnulio kalendorius</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {days.map((day) => (
            <div key={day.date} className="border border-gray-300 p-6 rounded-lg shadow-md bg-white bg-opacity-80 hover:shadow-lg transition-shadow">
              <h2 className="font-semibold text-xl mb-1">{day.date}</h2>
              <h3 className="font-medium text-lg mb-2">{day.phase}</h3>
              <p>{day.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
