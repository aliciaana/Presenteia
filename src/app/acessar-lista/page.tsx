'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AcessarLista() {
  const [listaCriada, setListaCriada] = useState(false);

  const lista = [
    { id: 1, nome: 'Presentes de Casamento', quantidade: 5, total: 'R$ 2.500,00', imagem: '', presenteado: false },
    { id: 2, nome: 'Viagem para o Alaska', quantidade: 7, total: 'R$ 7.500,00', imagem: '', presenteado: false },
    { id: 3, nome: 'Cotas de Lua de Mel', quantidade: 4, total: 'R$ 4.000,00', imagem: '', presenteado: true },
    { id: 4, nome: 'Brincadeiras', quantidade: 8, total: 'R$ 800,00', imagem: '', presenteado: false },
  ];

  if (!listaCriada) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">ACESSAR LISTA</h1>
        <p className="mb-6">Você ainda não tem uma lista criada!</p>
        <Link
          href="/criar-lista"
          className="bg-orange-300 hover:bg-orange-400 text-black px-8 py-3 rounded shadow-md"
        >
          CRIAR MINHA LISTA
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-10 py-8">
      <h1 className="text-3xl font-bold mb-2">Crie sua lista</h1>
      <p className="mb-8 text-gray-700">
        Escolha as opções que mais se encaixam com vocês!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {lista.map((item) => (
          <div
            key={item.id}
            className={`border rounded-md overflow-hidden shadow ${
              item.presenteado ? 'grayscale opacity-60' : ''
            }`}
          >
            <div className="bg-white h-36 flex items-center justify-center">
              <span className="text-gray-500">IMAGEM</span>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.nome}</h2>
              <p className="text-sm text-gray-600">{item.quantidade} presentes</p>
              <hr className="my-2" />
              <p className="text-sm">Total: {item.total}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
