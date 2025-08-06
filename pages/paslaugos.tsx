import React from 'react';
import Navbar from '../components/Navbar';

export default function Paslaugos() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen p-8 pt-24 text-gray-800">
        <h1 className="font-serif text-4xl mb-6 text-center">Paslaugos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-80">
            <h2 className="font-semibold text-xl mb-2">Natalinė diagrama</h2>
            <p className="mb-2">
              Atskleiskite savo asmeninę astrologinę kompoziciją. Gimimo momento žvaigždžių padėtis lemia jūsų charakterį, talentus ir gyvenimo kelionę.
            </p>
            <p className="mb-2 font-semibold">Kaina: 49€</p>
            <a href="mailto:justinas@klauskzvaigzdziu.lt" className="text-blue-600 underline">Užsisakyti</a>
          </div>
          {/* Card 2 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-80">
            <h2 className="font-semibold text-xl mb-2">Suderinamumo analizė</h2>
            <p className="mb-2">
              Sužinokite kaip jūsų ir partnerio astrologinės diagramos sąveikauja. Tai padeda suprasti santykių dinamiką ir augimo galimybes.
            </p>
            <p className="mb-2 font-semibold">Kaina: 59€</p>
            <a href="mailto:justinas@klauskzvaigzdziu.lt" className="text-blue-600 underline">Užsisakyti</a>
          </div>
          {/* Card 3 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-80">
            <h2 className="font-semibold text-xl mb-2">Metinė prognozė</h2>
            <p className="mb-2">
              Asmeninis horoskopas ateinantiems metams: svarbiausios planetų įtakos, palankūs laikotarpiai ir įspėjimai.
            </p>
            <p className="mb-2 font-semibold">Kaina: 65€</p>
            <a href="mailto:justinas@klauskzvaigzdziu.lt" className="text-blue-600 underline">Užsisakyti</a>
          </div>
          {/* Card 4 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-80">
            <h2 className="font-semibold text-xl mb-2">Klausimų astrologija</h2>
            <p className="mb-2">
              Užduokite konkretų klausimą ir žvaigždės padės surasti atsakymą. Horarinė astrologija – greitas sprendimas.
            </p>
            <p className="mb-2 font-semibold">Kaina: 35€</p>
            <a href="mailto:justinas@klauskzvaigzdziu.lt" className="text-blue-600 underline">Užsisakyti</a>
          </div>
        </div>
      </div>
    </>
  );
}
