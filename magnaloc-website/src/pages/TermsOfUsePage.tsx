import { Link } from 'react-router-dom';

const TermsOfUsePage = () => {
  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/#home" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para início
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Termos de Uso</h1>
          <p className="text-gray-600">
            Ao acessar este site, você concorda com os termos e condições abaixo.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              As informações apresentadas no site são apenas para fins institucionais e podem ser atualizadas
              sem aviso prévio.
            </p>
            <p>
              O uso indevido do conteúdo, incluindo marca e imagens, é proibido sem autorização prévia.
            </p>
            <p>
              Em caso de dúvidas, entre em contato pelo e-mail:
              <a href="mailto:comercial@magnaloc.com.br" className="text-primary-700 hover:text-primary-800 font-medium"> comercial@magnaloc.com.br</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUsePage;
