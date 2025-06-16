'use client';

import Link from 'next/link';

export default function CompartilharLista() {
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-center text-lg font-semibold mb-4">Compartilhe sua Lista</h1>

        <div className="flex flex-col gap-4">
          <Link
            href="/compartilhar-lista/whatsapp"
            className="border px-8 py-2 rounded text-center hover:bg-gray-100"
          >
            WhatsApp
          </Link>
          <Link
            href="/compartilhar-lista/qrcode"
            className="border px-8 py-2 rounded text-center hover:bg-gray-100"
          >
            QR Code
          </Link>
        </div>
      </div>
    </main>
  );
}
