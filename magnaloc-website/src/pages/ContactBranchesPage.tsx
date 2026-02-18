import { useMemo, useState, type FormEvent } from 'react';
import { branchesData } from '../data/branches';
import { submitToFormSubmit } from '../utils/formSubmit';
import { formatPhoneBR, isValidPhoneBR } from '../utils/phone';

const ContactBranchesPage = () => {
  const [branchEmail, setBranchEmail] = useState(branchesData[0].email);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Solicitação de contato');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const selectedBranch = useMemo(
    () => branchesData.find((branch) => branch.email === branchEmail) ?? branchesData[0],
    [branchEmail]
  );

  const selectBranchForEmail = (emailTarget: string) => {
    setBranchEmail(emailTarget);
    const element = document.getElementById('email-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        filial: `${selectedBranch.city} - ${selectedBranch.state}`,
        nome: name,
        telefone: phone,
        email,
        assunto: subject,
        mensagem: message,
      });

      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setSubject('Solicitação de contato');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contato por Filial</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha a filial mais próxima para entrar em contato direto com o time local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {branchesData.map((branch) => (
            <div key={branch.email} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{branch.city}</h2>
                <p className="text-sm font-semibold text-primary-600">{branch.state}</p>
              </div>

              <p className="text-sm text-gray-600 mb-4">{branch.address}</p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Telefone:</strong> {branch.phone}
              </p>
              <p className="text-sm text-gray-700 mb-5 break-all">
                <strong>E-mail:</strong> {branch.email}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/\D/g, '')}`}
                  className="text-center bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Ligar
                </a>
                <button
                  type="button"
                  onClick={() => selectBranchForEmail(branch.email)}
                  className="text-center border border-primary-600 text-primary-700 px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                >
                  E-mail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div id="email-form" className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Enviar e-mail para filial</h2>
          <p className="text-gray-600 mb-6">
            Filial selecionada: <strong>{selectedBranch.city} - {selectedBranch.state}</strong> ({selectedBranch.email})
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">
                  Filial
                </label>
                <select
                  id="branch"
                  value={branchEmail}
                  onChange={(event) => setBranchEmail(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {branchesData.map((branch) => (
                    <option key={branch.email} value={branch.email}>
                      {branch.city} - {branch.state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  id="subject"
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome
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

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu e-mail
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
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Descreva sua solicitação."
              />
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                E-mail enviado com sucesso para a filial selecionada.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                Não foi possível enviar agora. Tente novamente ou use o WhatsApp da filial.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:opacity-70"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar e-mail'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBranchesPage;
