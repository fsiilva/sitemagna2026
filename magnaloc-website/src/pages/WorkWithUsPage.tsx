import { Link } from 'react-router-dom';

const WorkWithUsPage = () => {
  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/#home" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para início
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trabalhe Conosco</h1>
          <p className="text-gray-600 mb-6">
            Quer fazer parte da equipe Magna Locações? Envie seu currículo e conte um pouco sobre você.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              Você pode encaminhar seu currículo para o nosso e-mail oficial e informar a área de interesse.
            </p>
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
              <p className="font-semibold text-gray-800">E-mail para envio</p>
              <a
                href="mailto:comercial@magnaloc.com.br?subject=Trabalhe%20Conosco%20-%20Curr%C3%ADculo"
                className="text-primary-700 hover:text-primary-800 font-medium"
              >
                comercial@magnaloc.com.br
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Assim que houver uma oportunidade compatível, entraremos em contato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsPage;
