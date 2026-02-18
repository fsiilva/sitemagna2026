import { useMemo, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { branchesData } from '../data/branches';
import { submitToFormSubmit } from '../utils/formSubmit';
import { formatPhoneBR, isValidPhoneBR } from '../utils/phone';

const QuoteRequestPage = () => {
  const [searchParams] = useSearchParams();
  const prefilledCategory = searchParams.get('categoria') ?? '';
  const prefilledEquipment = searchParams.get('equipamento') ?? '';

  const [branchEmail, setBranchEmail] = useState(branchesData[0].email);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState(prefilledCategory);
  const [equipment, setEquipment] = useState(prefilledEquipment);
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const selectedBranch = useMemo(
    () => branchesData.find((branch) => branch.email === branchEmail) ?? branchesData[0],
    [branchEmail]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    if (!isValidPhoneBR(phone)) {
      setPhoneError('Informe um telefone válido com DDD.');
      return;
    }

    setPhoneError('');
    setStatus('sending');

    try {
      await submitToFormSubmit(selectedBranch.email, {
        tipo: 'Solicitação de orçamento',
        filial: `${selectedBranch.city} - ${selectedBranch.state}`,
        nome: name,
        telefone: phone,
        email,
        empresa: company || 'Não informado',
        categoria: category || 'Não informado',
        equipamento: equipment || 'Não informado',
        mensagem: message || 'Sem mensagem adicional.',
      });

      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/#services" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para serviços
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Solicitar orçamento</h1>
          <p className="text-gray-600 mb-8">
            Preencha os dados e envie a solicitação para a filial desejada.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">
                Filial de atendimento
              </label>
              <select
                id="branch"
                value={branchEmail}
                onChange={(event) => setBranchEmail(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {branchesData.map((branch) => (
                  <option key={branch.email} value={branch.email}>
                    {branch.city} - {branch.state} ({branch.phone})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  id="phone"
                  required
                  value={phone}
                  onChange={(event) => {
                    setPhone(formatPhoneBR(event.target.value));
                    setPhoneError('');
                  }}
                  inputMode="numeric"
                  placeholder="(85) 99999-9999"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {phoneError && <p className="text-xs text-red-600 mt-1">{phoneError}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa (opcional)
                </label>
                <input
                  id="company"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoria
                </label>
                <input
                  id="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="equipment" className="block text-sm font-semibold text-gray-700 mb-2">
                  Equipamento
                </label>
                <input
                  id="equipment"
                  value={equipment}
                  onChange={(event) => setEquipment(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Informe prazo, quantidade e detalhes da sua necessidade."
              />
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 text-sm text-gray-700">
              O envio será direcionado para: <strong>{selectedBranch.city} - {selectedBranch.state}</strong> ({selectedBranch.email})
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                Solicitação enviada com sucesso para a filial selecionada.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                Não foi possível enviar agora. Tente novamente em instantes.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:opacity-70"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar solicitação'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestPage;
