// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function PresentesCasamento() {
//   const [presentes, setPresentes] = useState([
//     { id: 1, nome: 'Aparelho de jantar', preco: 345.00, imagem: 'public/images/aparelho.png' },
//     { id: 2, nome: 'Batedeira', preco: 150.00, imagem: 'public/images/batedeira.png' },
//     { id: 3, nome: 'Bomboniere em cristal', preco: 98.50, imagem: 'public/images/bomboniere.png' },
//     { id: 4, nome: 'Conjunto de facas', preco: 120.00, imagem: 'public/images/facas.png' },
//     { id: 5, nome: 'Porta temperos', preco: 89.90, imagem: 'public/images/porta-temperos.png' },
//   ]);

//   return (
//     <main className="min-h-screen bg-orange-50">
//       {/* Topo */}
//       <div className="bg-orange-200 px-4 py-2 flex items-center">
//         <a href="/criar-lista" className="text-black text-sm">&#8592; Listas de Casamento</a>
//       </div>

//       <div className="p-6">
//         <h1 className="text-2xl font-semibold text-gray-700 mb-2">Escolha seus presentes</h1>
//         <p className="text-sm text-gray-600 mb-4">
//           Selecionamos opções de presentes para você montar sua lista dos sonhos
//         </p>

//         {/* Resumo */}
//         <div className="border-t border-orange-500 pt-2 mb-4">
//           <p className="text-sm"><strong>Resumo da lista:</strong></p>
//           <p className="text-sm">Quantidade de presentes: {presentes.length}</p>
//           <p className="text-sm">Total da lista: R$ {
//             presentes.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
//           }</p>
//         </div>

//         {/* Grid de presentes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {presentes.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white border rounded-md shadow-md p-4 hover:shadow-lg transition"
//             >
//               <div className="w-full h-40 relative mb-3">
//                 <Image
//                   src={item.imagem}
//                   alt={item.nome}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <h2 className="text-lg font-medium">{item.nome}</h2>
//               <p className="text-sm mt-1">R${item.preco.toFixed(2)}</p>
//             </div>
//           ))}
//         </div>

//         {/* Botão */}
//         <div className="flex justify-end mt-6">
//           <button className="bg-orange-300 hover:bg-orange-400 px-6 py-2 rounded shadow">
//             Escolher Lista
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
