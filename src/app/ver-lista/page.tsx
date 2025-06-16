'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerLista() {
  const [nomeBusca, setNomeBusca] = useState('');
  const [dataBusca, setDataBusca] = useState('');
  const [resultado, setResultado] = useState(false);

  function handleBuscar(e: React.FormEvent) {
    e.preventDefault();

    const nomeSalvo = localStorage.getItem('nomes') || '';
    const dataSalva = localStorage.getItem('data') || '';
    const localSalvo = localStorage.getItem('local') || '';

    if (
      (nomeBusca && nomeBusca.toLowerCase() === nomeSalvo.toLowerCase()) ||
      (dataBusca && dataBusca === dataSalva)
    ) {
      setResultado(true);
    } else {
      alert('Nenhuma lista encontrada');
      setResultado(false);
    }
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Buscar uma lista...</h1>
      <p className="text-center mb-6">
        Confirme sua presença e encontre a lista de presente do casal que gostaria de presentear
        pelo nome ou data do evento.
      </p>

      {/* Formulário */}
      <form
        onSubmit={handleBuscar}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Nome do Casal:"
          value={nomeBusca}
          onChange={(e) => setNomeBusca(e.target.value)}
          className="border px-4 py-2"
        />

        <span className="font-semibold">ou</span>

        <input
          type="date"
          placeholder="Data do Casamento:"
          value={dataBusca}
          onChange={(e) => setDataBusca(e.target.value)}
          className="border px-4 py-2"
        />

        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded shadow"
        >
          Buscar
        </button>
      </form>

      {/* Resultado */}
      {resultado && (
        <div className="flex flex-col items-center gap-2">
          <div className="border w-80 h-48 flex items-center justify-center text-6xl font-bold">
            {localStorage.getItem('nomes')?.split(' ').map(n => n[0]).join('&')}
          </div>
          <p className="text-lg font-medium">{localStorage.getItem('nomes')}</p>
          <p className="text-sm">{localStorage.getItem('data')}</p>
          <p className="text-sm">{localStorage.getItem('local')}</p>

          <div className="flex gap-4 mt-4">
            <Link
              href="/confirmar-presenca"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Confirmar Presença
            </Link>
            <Link
              href="/acessar-lista"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Lista de Presentes
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
