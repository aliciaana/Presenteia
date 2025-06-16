'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EditarInformacoes() {
  const [nomes, setNomes] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');

  // Carregar dados salvos
  useEffect(() => {
    const nomesSalvos = localStorage.getItem('nomes') || '';
    const dataSalva = localStorage.getItem('data') || '';
    const localSalvo = localStorage.getItem('local') || '';

    setNomes(nomesSalvos);
    setData(dataSalva);
    setLocal(localSalvo);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem('nomes', nomes);
    localStorage.setItem('data', data);
    localStorage.setItem('local', local);

    alert('Informações atualizadas com sucesso!');
  }

  return (
    <main className="min-h-screen bg-rose-50">
      {/* Cabeçalho */}
      <div className="bg-orange-200 px-4 py-2">
        <Link href="/painel" className="text-black text-sm">
          &#8592; Editar informações
        </Link>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-md"
        >
          {/* Campo nome dos noivos */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-sm">NOME DOS NOIVOS:</label>
            <input
              type="text"
              value={nomes}
              onChange={(e) => setNomes(e.target.value)}
              className="border px-4 py-2 bg-gray-50"
              required
            />
          </div>

          {/* Campo data */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-sm">DATA DO CASAMENTO:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="border px-4 py-2 bg-gray-50"
              required
            />
          </div>

          {/* Campo local */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-sm">LOCAL DO EVENTO:</label>
            <input
              type="text"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="border px-4 py-2 bg-gray-50"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="bg-orange-300 hover:bg-orange-400 px-6 py-2 rounded shadow font-semibold"
          >
            SALVAR
          </button>
        </form>
      </div>
    </main>
  );
}
