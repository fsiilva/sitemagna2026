import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { branchesData } from '../data/branches';
import { formatPhoneBR, isValidPhoneBR } from '../utils/phone';

const TalkToUsPage = () => {
  const [branchEmail, setBranchEmail] = useState(branchesData[0].email);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Solicitação de atendimento');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const selectedBranch =
    branchesData.find((branch) => branch.email === branchEmail) ?? branchesData[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidPhoneBR(phone)) {
      setPhoneError('Informe um telefone válido com DDD.');
      return;
    }

    setPhoneError('');

    const text = [
      `Olá, filial ${selectedBranch.city} (${selectedBranch.state}).`,
      `Meu nome é ${name}.`,
      `Telefone para retorno: ${phone}.`,
      `Assunto: ${subject}.`,
      '',
      message || 'Gostaria de falar com o time comercial.',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/#home" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Voltar para início
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Fale Conosco</h1>
          <p className="text-gray-600 mb-8">
            Preencha os dados e você será redirecionado para conversar no WhatsApp com a filial escolhida.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Assunto
              </label>
              <input
                id="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
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
                placeholder="Escreva como podemos ajudar."
              />
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 text-sm text-gray-700">
              WhatsApp da filial selecionada: <strong>{selectedBranch.phone}</strong>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Conversar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TalkToUsPage;
