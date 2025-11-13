"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Wilson Ramires";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header/Menu Superior */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-zinc-800 z-50">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-green-400">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex gap-8">
            <a
              href="#sobre"
              className="text-zinc-400 hover:text-green-400 transition-colors"
            >
              Sobre Mim
            </a>
            <a
              href="#sobre"
              className="text-zinc-400 hover:text-green-400 transition-colors"
            >
              Timeline
            </a>
            <a
              href="#sobre"
              className="text-zinc-400 hover:text-green-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projetos"
              className="text-zinc-400 hover:text-green-400 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="text-zinc-400 hover:text-green-400 transition-colors"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* Sidebar Fixa */}
      <aside className="fixed left-0 top-0 h-screen w-16 bg-zinc-900/50 backdrop-blur-sm flex flex-col items-center justify-center gap-6 z-40">
        <a
          href="https://www.linkedin.com/in/wilson-ramires-20aa701ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-blue-600 rounded transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://github.com/wrcampello"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-green-600 rounded transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="mailto:stremon@msn.com"
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-red-600 rounded transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/wil_campll/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-pink-600 rounded transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/ramires.vivid"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-blue-500 rounded transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </aside>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pl-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 animate-fadeIn">
            <p className="text-lg md:text-xl text-zinc-400 font-light">
              Olá, eu sou o
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="inline-block min-w-[350px] md:min-w-[600px]">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light">
              Desenvolvedor Web
            </p>
            <p className="text-base md:text-lg text-zinc-400">
              Maringá - Paraná
            </p>
            <p className="text-base md:text-lg text-zinc-500 max-w-lg leading-relaxed">
              Desde sempre curioso, constante aprendiz e apaixonado por
              tecnologia
            </p>
          </div>

          {/* Foto com Gradiente */}
          <div className="relative flex justify-center items-center animate-fadeIn">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-green-800 rounded-full blur-3xl opacity-50 animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px)`,
              }}
            ></div>
            <div
              className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden border-4 border-green-500/30 shadow-2xl shadow-green-500/50 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 0.5
                }deg) rotateX(${-mousePosition.y * 0.5}deg) scale(1.02)`,
                animation:
                  "6s ease-in-out 0s infinite normal none running profile_animate",
              }}
            >
              <Image
                src="/wilson.jpg"
                alt="Wilson Ramires"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        className="min-h-screen py-20 px-8 md:px-16 pl-24 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Desenvolvedor web com mais de 22 anos de experiência,
                especializado em PHP e WordPress. Trabalho criando sites e
                portais com foco em performance e boa experiência do usuário.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Ao longo da carreira, desenvolvi projetos para empresas no
                Brasil e exterior, desde sites institucionais até aplicações
                personalizadas.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Trabalhei nos portais{" "}
                <span className="text-green-400 font-semibold">Omelete</span> e
                PointNerd e Portais da Rede São Camilo SP .
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                <span className="text-green-400 font-semibold">
                  Atualmente estudando JavaScript
                </span>
                , React, Next.js e Vite.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Tecnologias
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["PHP", "Python", "WordPress", "Laravel"].map((tech) => (
                    <div
                      key={tech}
                      className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                    >
                      <p className="font-semibold text-center">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  Estudando...
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["JavaScript", "React", "Next.js", "Vite"].map((tech) => (
                    <div
                      key={tech}
                      className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <p className="font-semibold text-center">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section
        id="projetos"
        className="min-h-screen py-20 px-8 md:px-16 pl-24 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Projetos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 - Hospital São Camilo */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src="/hsc.jpg"
                    alt="Hospital São Camilo"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold">Hospital São Camilo</h3>
                <p className="text-zinc-400 text-sm">
                  Site institucional desenvolvido em PHP,HTML,CSS utilizando CMS
                  WP com design moderno e foco em acessibilidade e experiência
                  do usuário.
                </p>
                <a
                  href="https://hospitalsaocamilosp.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>

            {/* Projeto 2 - Pacotes Particulares */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src="/pacote.jpg"
                    alt="Pacotes Particulares"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold">Pacotes Particulares</h3>
                <p className="text-zinc-400 text-sm">
                  Sistema de gerenciamento de valores para contratações de
                  cirurgias desenvolvido em PHP e WordPress.
                </p>
                <a
                  href="https://procedimentosmedicosgerenciados.hospitalsaocamilosp.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>

            {/* Projeto 3 - Guia Farmacêutico */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src="/guia.jpg"
                    alt="Guia Farmacêutico"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  Guia Farmacêutico São Camilo
                </h3>
                <p className="text-zinc-400 text-sm">
                  Guia farmacêutico da rede de hospitais São Camilo desenvolvido
                  em PHP e WordPress.
                </p>
                <a
                  href="https://guiafarmaceutico.hospitalsaocamilosp.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>

            {/* Projeto 4 - Campanha Outubro Rosa e Novembro Azul */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src="/rosaazul.jpg"
                    alt="Campanha Outubro Rosa e Novembro Azul"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  Outubro Rosa e Novembro Azul
                </h3>
                <p className="text-zinc-400 text-sm">
                  Landing page para campanha de conscientização Outubro Rosa e
                  Novembro Azul desenvolvida em PHP e WordPress.
                </p>
                <a
                  href="https://hospitalsaocamilosp.org.br/outubroenovembro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>

            {/* Projeto 5 - Carabaça e Laguna */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="w-full h-40 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src="/carabaca.jpg"
                    alt="Carabaça e Laguna Advocacia"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  Carabaça e Laguna Advocacia
                </h3>
                <p className="text-zinc-400 text-sm">
                  Portal institucional para escritório de advocacia desenvolvido
                  em PHP e WordPress.
                </p>
                <a
                  href="http://carabacaelaguna.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>

            {/* Projeto 6 - Em Breve */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 border-dashed transition-all duration-500">
              <div className="relative p-6 space-y-4 flex flex-col items-center justify-center h-full min-h-[320px]">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">⏳</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-400">Em Breve...</h3>
                <p className="text-zinc-500 text-sm text-center">
                  Novo projeto em desenvolvimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section
        id="contato"
        className="min-h-screen py-20 px-8 md:px-16 pl-24 bg-gradient-to-b from-zinc-900 to-black flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em
            contato!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:stremon@msn.com"
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            >
              <span className="flex items-center justify-center gap-2">
                Enviar Email
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1rlnKDBJIzQTOwkdNI7hp1zGZnZaUsdyU/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
            >
              Ver Currículo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 pl-24 border-t border-zinc-800 bg-black">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">
          <p>© 2024 Wilson Ramires. Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
