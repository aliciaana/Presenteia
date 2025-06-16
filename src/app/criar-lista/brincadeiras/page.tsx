'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Brincadeiras() {
  const [presentes] = useState([
    { id: 1, nome: '1 mês de almoço garantido em casa', preco: 500.00, imagem: '/images/almoco.png' },
    { id: 2, nome: 'Bolo de cenoura semanal para a noiva', preco: 250.00, imagem: '/images/bolo.png' },
  ]);

  return (
    <main className="min-h-screen bg-orange-50">
      <div className="bg-orange-200 px-4 py-2">
        <a href="/criar-lista" className="text-black text-sm">&#8592; Listas de Casamento</a>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-2">Escolha seus presentes</h1>
        <p className="text-sm mb-4">Aqui a diversão é garantida!</p>

        <div className="border-t border-orange-500 pt-2 mb-4">
          <p className="text-sm font-semibold">Resumo da lista:</p>
          <p>Quantidade: {presentes.length}</p>
          <p>Total: R${presentes.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {presentes.map((item) => (
            <div key={item.id} className="bg-white border rounded shadow p-4">
              <div className="relative w-full h-40 mb-3">
                <Image src={item.imagem} alt={item.nome} fill className="object-contain" />
              </div>
              <h2 className="font-medium">{item.nome}</h2>
              <p>R${item.preco.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-orange-300 hover:bg-orange-400 px-6 py-2 rounded shadow">
            Escolher Lista
          </button>
        </div>
      </div>
    </main>
  );
}
