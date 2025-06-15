'use client';

import { useState } from 'react';
import Link from 'next/link';

// COMPONENTE PARA CADA PERGUNTA
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-left text-blue-800">{question}</h3>
        <span className="text-2xl text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-700 text-left">{answer}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 text-gray-800">
      {/* CABEÇALHO */}
      <header className="bg-white flex justify-between items-center px-6 py-4 shadow">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700">Presenteia</span>
          <span className="text-xl">💍</span>
        </div>
        <div className="flex gap-4">
          <Link href="/criar-lista" className="bg-blue-300 text-white px-4 py-2 rounded">
            Criar minha lista
          </Link>
          <Link href="/ver-lista" className="border border-blue-300 text-blue-500 px-4 py-2 rounded">
            Buscar lista
          </Link>
        </div>
      </header>

      {/* MENU */}
      <nav className="bg-blue-200 text-center py-2 font-semibold text-blue-700">
        <ul className="flex justify-center gap-8">
          <li><a href="#vantagens" className="hover:underline">Vantagens</a></li>
          <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
          <li><a href="#duvidas" className="hover:underline">Dúvidas Frequentes</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-10 py-20 min-h-screen">
        {/* TEXTO */}
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Lista de Casamento no Presenteia
          </h2>
          <p className="text-base mb-4">
            A lista de casamento facilita a organização dos presentes e é uma maneira elegante, prática e segura de compartilhar esse momento com os convidados.
          </p>
          <ul className="list-none space-y-3 mb-6 text-base">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✅</span>
              Mais de 50 opções de presentes: eletrodomésticos, viagem, itens para o lar, e mais!
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✅</span>
              Rápido, gratuito e fácil de usar. Sem complicação.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✅</span>
              Totalmente online.
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/criar-lista" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-semibold text-center">
              Criar minha lista
            </Link>
            <Link href="/ver-lista" className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-5 py-2 rounded font-semibold text-center">
              Buscar casal
            </Link>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="w-full md:w-1/3 p-4 text-center">
          <p className="text-lg font-semibold text-blue-500">IMAGEM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="imagem decorativa"
            className="mx-auto mt-4 w-40 opacity-60"
          />
        </div>
      </section>

      {/* VANTAGENS */}
      <section
        id="vantagens"
        className="flex flex-col md:flex-row justify-center items-center gap-8 px-10 bg-white min-h-screen scroll-mt-[80px]"
      >
        {/* IMAGEM FUTURA */}
        <div className="hidden md:block w-full md:w-1/2 h-60 bg-blue-100 rounded-lg shadow-inner" />

        {/* TEXTO */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Por que usar o Presenteia?</h3>
          <ul className="space-y-3 text-base">
            <li>🎁 Interface simples e intuitiva</li>
            <li>🔒 Segurança para os noivos e convidados</li>
            <li>📱 Totalmente online e acessível de qualquer dispositivo</li>
            <li>💙 Compartilhamento fácil via link ou QR Code</li>
          </ul>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section
        id="depoimentos"
        className="bg-blue-50 px-10 py-20 min-h-screen scroll-mt-[80px] flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Quem usou, aprovou e recomenda!</h2>
        <p className="mb-10 text-gray-600">De 0 a 5, avaliado com nota média de 4.96</p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full max-w-6xl">
          {/* Depoimento 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="mb-4">“Nossa experiência com o Presenteia foi incrível! Criamos a lista em minutos e os convidados acharam super fácil de usar.”</p>
            <p className="text-sm text-gray-500">Avaliação: ⭐⭐⭐⭐⭐</p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Nina" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Nina & José</p>
                <p className="text-xs text-gray-500">12/04/2025 - Recife, PE</p>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="mb-4">“Ficamos encantados com o design e praticidade! Acompanhar os presentes em tempo real foi um diferencial.”</p>
            <p className="text-sm text-gray-500">Avaliação: ⭐⭐⭐⭐⭐</p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Leo" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Leonardo & Julia</p>
                <p className="text-xs text-gray-500">05/05/2025 - Salvador, BA</p>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="mb-4">“Tivemos muito mais controle e organização usando o Presenteia. Foi uma das melhores decisões do nosso casamento.”</p>
            <p className="text-sm text-gray-500">Avaliação: ⭐⭐⭐⭐⭐</p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Aline" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Aline & Bruno</p>
                <p className="text-xs text-gray-500">22/03/2025 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DÚVIDAS FREQUENTES */}
      <section
        id="duvidas"
        className="bg-white px-10 py-20 min-h-screen scroll-mt-[80px] flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Dúvidas Frequentes
        </h2>

        <div className="w-full max-w-3xl">
          <FAQItem
            question="Como funciona a lista de presentes no Presenteia?"
            answer="Você cria sua lista e compartilha o link com os convidados. Eles escolhem um presente da sua lista e você recebe uma notificação."
          />
          <FAQItem
            question="Preciso pagar para usar o site?"
            answer="Não! O Presenteia é gratuito para os noivos e para os convidados."
          />
          <FAQItem
            question="Posso editar minha lista depois de criada?"
            answer="Sim. Você pode adicionar ou remover presentes a qualquer momento."
          />
          <FAQItem
            question="Os convidados conseguem acessar pelo celular?"
            answer="Sim, o site é 100% responsivo e funciona perfeitamente em celulares, tablets e computadores."
          />
          <FAQItem
            question="O que acontece depois que um presente é comprado?"
            answer="Você recebe uma notificação por e-mail e a lista é atualizada automaticamente."
          />
        </div>
      </section>
    </main>
  );
}