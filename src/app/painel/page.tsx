'use client';

import { useEffect, useState } from 'react';

export default function Painel() {
  const [nomes, setNomes] = useState('João & Maria');
  const [data, setData] = useState('2026-12-20');
  const [cores, setCores] = useState<string[]>(['#fcd9d9', '#fce8e8']);
  const [diasFaltando, setDiasFaltando] = useState<number | null>(null);

  const [valorRecebido] = useState(0);
  const [confirmacoes] = useState(0);

  useEffect(() => {
    const hoje = new Date();
    const dataCasamento = new Date(data);
    const diff = Math.ceil(
      (dataCasamento.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDiasFaltando(diff);
  }, [data]);

  const cor1 = cores[0] || '#fde2e2';
  const cor2 = cores[1] || '#fde2e2';
  const slug = nomes.replace(/\s/g, '') + '2026';

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: cor2 }}>
      {/* Cabeçalho */}
      <header
        className="w-full text-white text-3xl px-6 py-3"
        style={{ backgroundColor: cor1 }}
      >
        <span className="font-light">INÍCIO</span>
      </header>

      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside
          className="w-full md:w-1/4 p-4 flex flex-col gap-4 border-r"
          style={{ backgroundColor: cor1 }}
        >
          <div className="text-center text-lg text-gray-800">{nomes}</div>

          {diasFaltando !== null && diasFaltando >= 0 ? (
            <div className="text-center text-sm text-gray-700">
              Faltam <b>{diasFaltando}</b> dias para o casamento
            </div>
          ) : (
            <div className="text-center text-sm text-gray-700">
              Data não definida
            </div>
          )}

          <button className="border px-4 py-3 bg-white hover:bg-gray-100">
            Acessar Lista
          </button>
          <button className="border px-4 py-3 bg-white hover:bg-gray-100">
            Confirmação de Presença
          </button>
          <button className="border px-4 py-3 bg-white hover:bg-gray-100">
            Editar Informações
          </button>
          <button className="border px-4 py-3 bg-white hover:bg-gray-100">
            Compartilhar Lista
          </button>
        </aside>

        {/* Conteúdo principal */}
        <section className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Olá, <span className="text-black">{nomes}!</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Fique por dentro de todos detalhes do seu evento
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Presentes */}
            <div className="bg-white border shadow p-4">
              <h3 className="font-semibold text-base mb-1">Presentes</h3>
              <p className="text-xs text-gray-500 mb-1">Valor recebido</p>
              <p className="text-2xl font-bold mb-4">R${valorRecebido.toFixed(2)}</p>
              <div className="flex gap-2">
                <button className="bg-orange-200 w-1/2 py-2 text-sm font-semibold">
                  RESUMO
                </button>
                <button className="bg-orange-200 w-1/2 py-2 text-sm font-semibold">
                  RESGATE
                </button>
              </div>
            </div>

            {/* Confirmações */}
            <div className="bg-white border shadow p-4">
              <h3 className="font-semibold text-base mb-1">Confirmações</h3>
              <p className="text-4xl font-bold mb-4">{confirmacoes}</p>
              <button className="bg-orange-200 w-full py-2 text-sm font-semibold">
                RESUMO
              </button>
            </div>
          </div>

          {/* Link */}
          <div className="mt-8">
            <h4 className="text-red-500 mb-2">Endereço do Site:</h4>
            <div className="border px-4 py-2 bg-white">
              <a
                href={`https://sites.presenteia.com.br/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                sites.presenteia.com.br/{slug}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
