'use client';

import Link from 'next/link';

export default function WhatsApp() {
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow-md max-w-sm">
        <h1 className="text-center text-lg font-semibold mb-4">Compartilhe sua Lista</h1>

        <p className="text-sm mb-4">
          Compartilhe sua lista com seus familiares e amigos através do WhatsApp:
        </p>

        <a
          href="https://sites.presenteia.com.br/JoaoMaria2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-words"
        >
          sites.presenteia.com.br/JoaoMaria2026
        </a>

        <Link
          href="/painel"
          className="mt-6 block text-center text-sm text-gray-600 underline"
        >
          ← Voltar
        </Link>
      </div>
    </main>
  );
}
