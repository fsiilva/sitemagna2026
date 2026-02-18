const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça a Magna Locações
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                A <strong className="text-primary-600">Magna Locações</strong> é uma empresa consolidada no mercado nordestino,
                com quase 40 anos de experiência em locação de equipamentos para construção civil e indústria.
              </p>
              <p>
                Nossa missão é fornecer soluções eficientes e de alta qualidade para nossos clientes,
                oferecendo equipamentos modernos, bem mantidos e prontos para uso.
              </p>
              <p>
                Com 8 filiais estrategicamente localizadas nos principais estados do Nordeste,
                garantimos atendimento rápido e eficiente em toda a região.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">Missão</h3>
                <p className="text-sm text-gray-600">
                  Fornecer equipamentos de qualidade com excelência no atendimento
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">Visão</h3>
                <p className="text-sm text-gray-600">
                  Ser referência em locação de equipamentos no Nordeste
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Por que escolher a Magna Locações?</h3>
                <div className="space-y-4">
                  {[
                    'Equipamentos modernos e bem conservados',
                    'Atendimento personalizado',
                    'Equipe técnica qualificada',
                    'Entrega rápida em toda região',
                    'Preços competitivos',
                    'Suporte técnico especializado',
                  ].map((text, index) => (
                    <div key={index} className="flex items-center text-white">
                      <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-lg">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
