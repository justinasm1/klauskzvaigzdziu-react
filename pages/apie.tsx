import React from 'react';
import Navbar from '../components/Navbar';

export default function Apie() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 min-h-screen text-gray-800 pt-24">
        <h1 className="font-serif text-4xl mb-6 text-center">Apie mane</h1>
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          <img src="/images/astrologas-avataras.jpg" alt="Astrologas Justinas Mažuika" className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"/>
          <div className="space-y-4 text-lg">
            <p>
              Sveiki! Esu Justinas Mažuika, profesionalus astrologas ir dėstytojas, turintis
              daugiau nei dešimtmetį patirties. Mano kelionė prasidėjo nuo smalsumo
              suvokti dangaus kūnų įtaką žmogaus gyvenimui ir likimui.
            </p>
            <p>
              Studijavau tiek Vakarų, tiek Vedų astrologiją, gilinausi į astronomijos
              pagrindus ir psichologiją. Šis tarpdisciplininis požiūris leidža man
              pasiūlyti gilias ir praktiškas įzvalgas kiekvienam, kuris kreipiasi pagalbos.
            </p>
            <p>
              Per savo praktiką konsultavau šimtus žmonių, padėdamas jiems atrasti
              savo talentus, išspręsti santykių iššūkius ir planuoti svarbiausius gyvenimo
              žingsnius. Astrologija man yra ne tik darbas, bet ir pašaukimas – iš širdies
              siekiu dalintis žvaigždžių išmintimi ir padėti žmonėms gyventi darniai.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
