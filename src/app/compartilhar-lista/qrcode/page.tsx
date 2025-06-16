'use client';

import Link from 'next/link';

export default function QrCode() {
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow-md max-w-sm">
        <h1 className="text-center text-lg font-semibold mb-4">Compartilhe sua Lista</h1>

        <p className="text-sm mb-4">
          Compartilhe sua lista com seus familiares e amigos através de um <strong>QR Code</strong>. 
          Aponte a câmera do seu dispositivo para o código abaixo:
        </p>

        <div className="w-40 h-40 bg-gray-200 flex items-center justify-center mb-4">
          {/* Aqui vai o QR Code gerado pelo backend */}
          <span className="text-gray-500">QR CODE</span>
        </div>

        <p className="text-[10px] text-gray-600">
          Dica: Você pode adicionar o QR Code no convite do casamento. Todos vão amar!
        </p>

        <Link
          href="/painel"
          className="mt-4 block text-center text-sm text-gray-600 underline"
        >
          ← Voltar
        </Link>
      </div>
    </main>
  );
}
