import { Link, useParams } from 'react-router-dom';
import { equipmentData, findEquipmentBySlug } from '../data/equipment';

const EquipmentDetailsPage = () => {
  const { slug } = useParams();
  const equipment = slug ? findEquipmentBySlug(slug) : undefined;

  if (!equipment) {
    return (
      <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Equipamento não encontrado</h1>
            <p className="text-gray-600 mb-6">
              O item solicitado não está disponível ou o link está incorreto.
            </p>
            <Link
              to="/#services"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Voltar para serviços
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const related = equipmentData
    .filter((item) => item.category === equipment.category && item.slug !== equipment.slug)
    .slice(0, 6);

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <Link to="/#services" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para serviços
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-sm font-semibold text-primary-600 mb-2">{equipment.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{equipment.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{equipment.shortDescription}</p>
          <div className="mb-6 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
            <img
              src={equipment.imageUrl}
              alt={equipment.name}
              className="w-full h-72 md:h-96 object-contain bg-white"
              loading="lazy"
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Detalhes</h2>
            <p className="text-gray-700 leading-relaxed">{equipment.details}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Destaques</h2>
            <ul className="space-y-2">
              {equipment.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to={`/orcamento?categoria=${encodeURIComponent(
              equipment.category
            )}&equipamento=${encodeURIComponent(equipment.name)}`}
            className="mt-8 inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Solicitar orçamento deste equipamento
          </Link>
        </div>

        {related.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Outros equipamentos em {equipment.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/equipamentos/${item.slug}`}
                  className="text-primary-700 hover:text-primary-800 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquipmentDetailsPage;
