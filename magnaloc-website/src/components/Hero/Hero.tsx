import { useEffect, useState } from 'react';

const containerBackgrounds = [
  'https://www.magnaloc.com.br/images/equipamentos/conteineres/Container-almoxarifado6.jpg',
  'https://www.magnaloc.com.br/images/equipamentos/conteineres/escritorio6m.jpg',
  'https://www.magnaloc.com.br/images/equipamentos/conteineres/predial.jpg',
  'https://www.magnaloc.com.br/images/equipamentos/conteineres/duplo30.jpg',
  'https://www.magnaloc.com.br/images/equipamentos/conteineres/escritorio_wc_v05.jpg',
];

const Hero = () => {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % containerBackgrounds.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url('${containerBackgrounds[activeBackground]}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Soluções em Locação de Equipamentos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            Há quase 40 anos oferecendo qualidade e excelência em locação de equipamentos para construção civil e indústria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <a
              href="#services"
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Ver Equipamentos
            </a>
            <a
              href="/fale-conosco"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">40+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">8</div>
              <div className="text-white/80">Filiais no Nordeste</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Equipamentos Disponíveis</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
