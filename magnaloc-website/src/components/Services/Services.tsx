import { Link } from 'react-router-dom';
import { getCategorySlug, servicesData } from '../../data/equipment';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha uma categoria para ver todos os equipamentos disponíveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {servicesData.map((service) => (
            <Link
              key={service.name}
              to={`/categorias/${getCategorySlug(service.name)}`}
              className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary-50 p-3">
                <img
                  src={service.iconUrl}
                  alt={service.name}
                  className="h-9 w-9 object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                {service.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary-700">{service.items.length} equipamentos</span>
                <span className="text-gray-500 group-hover:text-primary-700 transition-colors">Ver lista →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
