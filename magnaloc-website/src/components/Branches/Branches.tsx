import { useMemo, useState } from 'react';
import { branchesData, type Branch } from '../../data/branches';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branchesData[0]);

  const mapSrc = useMemo(
    () =>
      `https://maps.google.com/maps?q=${encodeURIComponent(
        selectedBranch.mapQuery
      )}&z=15&output=embed`,
    [selectedBranch.mapQuery]
  );

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Filiais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Presença em 8 cidades do Nordeste para melhor atendê-lo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {branchesData.map((branch, index) => {
            const isSelected =
              selectedBranch.city === branch.city &&
              selectedBranch.state === branch.state;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedBranch(branch)}
                className={`text-left w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  branch.isMain ? 'relative' : ''
                } ${isSelected ? 'ring-2 ring-primary-500' : ''}`}
              >
                {branch.isMain && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Matriz
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{branch.city}</h3>
                    <span className="text-sm text-primary-600 font-semibold">
                      {branch.state}
                    </span>
                  </div>
                  <div className="bg-primary-100 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className="text-gray-600">{branch.address}</span>
                  </div>

                  <a
                    href={`tel:${branch.phone.replace(/\D/g, '')}`}
                    className="flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {branch.phone}
                  </a>

                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center text-primary-600 hover:text-primary-700 break-all"
                  >
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {branch.email}
                  </a>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Localização das Filiais</h3>
            <p className="text-gray-600 mb-6">
              Clique em uma filial para visualizar o endereço no mapa interativo.
            </p>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <iframe
                title={`Mapa da filial ${selectedBranch.city}`}
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Exibindo: <span className="font-semibold text-gray-700">{selectedBranch.city} - {selectedBranch.state}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
