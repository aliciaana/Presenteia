'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfirmarPresenca() {
  const convidados = [
    { id: 1, nome: 'Ana Júlia', quantidade: 2 },
    { id: 2, nome: 'João Gabriel', quantidade: 4 },
    { id: 3, nome: 'Emanuele Maria', quantidade: 3 },
  ];

  const [nomeBusca, setNomeBusca] = useState('');
  const [convidadoEncontrado, setConvidadoEncontrado] = useState<any>(null);
  const [confirmado, setConfirmado] = useState(false);

  function handleBuscar(e: React.FormEvent) {
    e.preventDefault();

    const resultado = convidados.find((c) =>
      c.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );

    if (resultado) {
      setConvidadoEncontrado(resultado);
    } else {
      alert('Convidado não encontrado');
      setConvidadoEncontrado(null);
    }
  }

  function handleConfirmar() {
    setConfirmado(true);
    alert('Presença confirmada com sucesso!');
  }

  return (
    <main className="min-h-screen bg-rose-50 p-6">
      {/* Topo */}
      <div className="bg-orange-200 px-4 py-2 mb-6">
        <Link href="/ver-lista" className="text-black text-sm">
          &#8592; Confirmar Presença
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Confirmar Presença</h1>

        {/* Formulário de busca */}
        {!convidadoEncontrado && (
          <form
            onSubmit={handleBuscar}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-sm">Digite seu nome:</label>
              <input
                type="text"
                value={nomeBusca}
                onChange={(e) => setNomeBusca(e.target.value)}
                className="border px-4 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-orange-300 hover:bg-orange-400 px-6 py-2 rounded shadow font-semibold"
            >
              Buscar
            </button>
          </form>
        )}

        {/* Resultado */}
        {convidadoEncontrado && !confirmado && (
          <div className="mt-6 border px-6 py-4 rounded shadow bg-white text-center">
            <p className="text-lg">
              <strong>{convidadoEncontrado.nome}</strong> e{' '}
              <strong>{convidadoEncontrado.quantidade - 1}</strong>{' '}
              acompanhante(s)
            </p>

            <p className="text-sm text-gray-600 mt-2">
              Deseja confirmar sua presença?
            </p>

            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={handleConfirmar}
                className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded shadow"
              >
                Confirmar
              </button>
              <button
                onClick={() => setConvidadoEncontrado(null)}
                className="bg-red-400 hover:bg-red-500 px-6 py-2 rounded shadow"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Mensagem de sucesso */}
        {confirmado && (
          <div className="mt-6 border px-6 py-4 rounded shadow bg-white text-center">
            <p className="text-lg font-semibold text-green-600">
              Presença confirmada com sucesso!
            </p>

            <button
              onClick={() => {
                setConvidadoEncontrado(null);
                setNomeBusca('');
                setConfirmado(false);
              }}
              className="mt-4 bg-orange-300 hover:bg-orange-400 px-6 py-2 rounded shadow"
            >
              Fazer outra confirmação
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
