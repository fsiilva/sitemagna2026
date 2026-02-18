type FormSubmitPayload = Record<string, string>;

export const submitToFormSubmit = async (targetEmail: string, payload: FormSubmitPayload) => {
  const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _captcha: 'false',
      _template: 'table',
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha no envio (${response.status})`);
  }

  return response.json();
};
