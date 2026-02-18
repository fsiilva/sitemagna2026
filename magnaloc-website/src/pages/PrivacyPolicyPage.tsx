import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/#home" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para início
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Política de Privacidade</h1>
          <p className="text-gray-600">
            Esta página descreve como a Magna Locações coleta, utiliza e protege os dados pessoais informados
            pelos usuários.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              Coletamos apenas as informações necessárias para atender solicitações de orçamento e contato,
              como nome, e-mail e telefone.
            </p>
            <p>
              Os dados são utilizados exclusivamente para retorno do atendimento e não são compartilhados com
              terceiros, exceto quando exigido por lei.
            </p>
            <p>
              Caso tenha dúvidas ou queira solicitar alteração/exclusão de dados, entre em contato pelo e-mail:
              <a href="mailto:comercial@magnaloc.com.br" className="text-primary-700 hover:text-primary-800 font-medium"> comercial@magnaloc.com.br</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
