'use client';

export default function ConfirmacaoPresenca() {
  const convidados = [
    { id: 1, nome: 'Ana Júlia', quantidade: 2 },
    { id: 2, nome: 'João Gabriel', quantidade: 4 },
    { id: 3, nome: 'Emanuele Maria', quantidade: 3 },
  ];

  const confirmados = [
    { id: 2, nome: 'João Gabriel', quantidade: 2 },
  ];

  return (
    <main className="min-h-screen bg-rose-50">
      {/* Cabeçalho */}
      <div className="bg-orange-200 px-4 py-2">
        <a href="/painel" className="text-black text-sm">&#8592; Confirmação de Presença</a>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center justify-center p-6">
        <div className="flex gap-6">
          {/* Coluna Convidados */}
          <div>
            <div className="bg-orange-300 px-6 py-2 rounded-t-md text-center font-semibold">
              CONVIDADOS
            </div>
            <div className="border border-orange-300 p-4 w-64 min-h-[300px]">
              {convidados.map((item) => (
                <p key={item.id}>
                  {item.id} - {item.nome} ({item.quantidade})
                </p>
              ))}
            </div>
          </div>

          {/* Coluna Confirmados */}
          <div>
            <div className="bg-orange-300 px-6 py-2 rounded-t-md text-center font-semibold">
              CONFIRMADOS
            </div>
            <div className="border border-orange-300 p-4 w-64 min-h-[300px]">
              {confirmados.length === 0 ? (
                <p className="text-sm text-gray-500">Nenhuma confirmação ainda</p>
              ) : (
                confirmados.map((item) => (
                  <p key={item.id}>
                    {item.id} - {item.nome} ({item.quantidade})
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
