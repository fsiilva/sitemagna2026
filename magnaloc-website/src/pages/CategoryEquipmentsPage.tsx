import { Link, useParams } from 'react-router-dom';
import {
  findCategoryBySlug,
  getEquipmentsByCategory,
  getCategorySlug,
  servicesData,
} from '../data/equipment';

const CategoryEquipmentsPage = () => {
  const { categorySlug } = useParams();
  const category = categorySlug ? findCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return (
      <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Categoria não encontrada</h1>
            <p className="text-gray-600 mb-6">A categoria solicitada não existe.</p>
            <Link
              to="/#services"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Voltar para categorias
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const equipments = getEquipmentsByCategory(category.name);

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/#services" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para categorias
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center rounded-lg bg-primary-50 p-3">
              <img src={category.iconUrl} alt={category.name} className="h-10 w-10 object-contain" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
          <p className="text-sm text-primary-700 font-semibold">{equipments.length} equipamentos disponíveis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((equipment) => (
            <div key={equipment.slug} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <Link to={`/equipamentos/${equipment.slug}`}>
                <img
                  src={equipment.imageUrl}
                  alt={equipment.name}
                  className="w-full h-48 object-contain bg-white"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{equipment.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{equipment.shortDescription}</p>

                <div className="flex gap-2">
                  <Link
                    to={`/equipamentos/${equipment.slug}`}
                    className="flex-1 text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Ver detalhes
                  </Link>
                  <Link
                    to={`/orcamento?categoria=${encodeURIComponent(
                      equipment.category
                    )}&equipamento=${encodeURIComponent(equipment.name)}`}
                    className="flex-1 text-center border border-primary-600 text-primary-700 py-2 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                  >
                    Orçamento
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Outras categorias</h2>
          <div className="flex flex-wrap gap-2">
            {servicesData
              .filter((service) => service.name !== category.name)
              .map((service) => (
                <Link
                  key={service.name}
                  to={`/categorias/${getCategorySlug(service.name)}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:border-primary-500 hover:text-primary-700 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryEquipmentsPage;
