'use client';

import { useState } from 'react';

export default function CriarLista() {
  const [nomes, setNomes] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Salvando no localStorage como simulação
    localStorage.setItem('nomes', nomes);
    localStorage.setItem('data', data);
    localStorage.setItem('local', local);

    window.location.href = '/criar-lista/personalizar';
  }

  return (
    <main className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-white mb-8">Criando minha lista...</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col text-left">
            <label className="text-sm font-semibold text-gray-700 mb-1">Nome dos noivos:</label>
            <input
              type="text"
              value={nomes}
              onChange={(e) => setNomes(e.target.value)}
              placeholder="Ex: João e Maria"
              className="px-4 py-2 border border-gray-400 rounded bg-white"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-semibold text-gray-700 mb-1">Data do casamento:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="px-4 py-2 border border-gray-400 rounded bg-white"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-semibold text-gray-700 mb-1">Local do evento:</label>
            <input
              type="text"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Ex: Salão Festa do Lago"
              className="px-4 py-2 border border-gray-400 rounded bg-white"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Próximo passo
          </button>
        </form>
      </div>
    </main>
  );
}




