// 'use client';

// import { useState } from 'react';

// export default function PersonalizarLista() {
//   const [estilo, setEstilo] = useState('');
//   const [cores, setCores] = useState<string[]>([]);

//   const estilosDisponiveis = ['Clássico', 'Moderno', 'Rústico', 'Praia'];
//   const coresDisponiveis = ['Azul', 'Rosa', 'Verde', 'Dourado', 'Lilás', 'Branco'];

//   function toggleCor(cor: string) {
//     if (cores.includes(cor)) {
//       setCores(cores.filter((c) => c !== cor));
//     } else if (cores.length < 2) {
//       setCores([...cores, cor]);
//     }
//   }

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     alert(`Estilo: ${estilo}\nCores: ${cores.join(', ')}`);
//     // Aqui sua amiga pode conectar com o backend futuramente
//   }

//   return (
//     <main className="min-h-screen bg-blue-100 flex items-center justify-center px-4 py-10">
//       <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-6 rounded shadow flex flex-col items-center gap-6">
//         <h1 className="text-xl font-bold text-blue-800">Personalizando minha lista</h1>

//         {/* Estilo */}
//         <div className="w-full">
//           <label className="block mb-2 font-semibold text-gray-700">Escolher estilo do evento:</label>
//           <div className="grid grid-cols-2 gap-3">
//             {estilosDisponiveis.map((opcao) => (
//               <button
//                 key={opcao}
//                 type="button"
//                 onClick={() => setEstilo(opcao)}
//                 className={`px-4 py-2 border rounded ${estilo === opcao ? 'bg-blue-300 text-white' : 'bg-white'}`}
//               >
//                 {opcao}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Cores */}
//         <div className="w-full">
//           <label className="block mb-2 font-semibold text-gray-700">Escolher até 2 cores:</label>
//           <div className="grid grid-cols-3 gap-3">
//             {coresDisponiveis.map((cor) => (
//               <button
//                 key={cor}
//                 type="button"
//                 onClick={() => toggleCor(cor)}
//                 className={`px-4 py-2 border rounded ${cores.includes(cor) ? 'bg-blue-300 text-white' : 'bg-white'}`}
//               >
//                 {cor}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Botão Final */}
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-4"
//         >
//           Pronto
//         </button>
//       </form>
//     </main>
//   );
// }
