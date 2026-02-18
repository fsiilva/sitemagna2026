import { useState, useEffect } from 'react';

import logoUrl from '../../assets/imagens/LGML.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Containers',
    'Banheiros e Lavabos',
    'Betoneiras',
    'Escoramento',
    'Andaimes',
    'Movimentação',
    'Máquinas',
    'Ferramentas',
    'Compactadores'
  ];

  const categorySlug = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-2.5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/#home" className="flex items-center" aria-label="Magna Locações - Início">
            <img
              src={logoUrl}
              alt="Logo Magna Locações"
              className="h-16 sm:h-18 md:h-24 lg:h-28 w-auto object-contain -my-3 translate-y-0.5"
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/#home" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Início
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
                Serviços
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`/categorias/${categorySlug(service)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="/#branches" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Filiais
            </a>
            <a href="/contato" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contato
            </a>
            <a
              href="tel:+558533113200"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium"
            >
              (85) 3311-3200
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="/#home" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Início
              </a>
              <div className="border-t border-gray-200 pt-2">
                <div className="text-gray-600 text-sm font-semibold mb-2">Serviços</div>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`/categorias/${categorySlug(service)}`}
                    className="block pl-4 py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
              <a href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="/#branches" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Filiais
              </a>
              <a href="/contato" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Contato
              </a>
              <a
                href="tel:+558533113200"
                className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-medium text-center"
              >
                (85) 3311-3200
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



