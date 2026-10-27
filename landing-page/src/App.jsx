import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, Menu, X } from 'lucide-react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import TermosEPrivacidade from './pages/TermosEPrivacidade';

// ── Ícones de redes sociais como SVG inline (lucide-react v1.24 removeu esses) ──
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const IconFacebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconWhatsapp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '5547991801340';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Acessei o site do escritório e gostaria de agendar uma consulta.')}`;

const AREAS = [
  {
    title: 'Direito Previdenciário',
    sub: 'Ramo voltado à proteção social do contribuinte perante a seguridade pública em momentos de vulnerabilidade econômica decorrentes de idade, tempo de contribuição, incapacidade ou morte. Compreende a concessão, o restabelecimento e a revisão de benefícios previdenciários e assistenciais.',
    icon: ArrowRightIcon,
    solucoes: [
      'Aposentadoria por idade, por tempo de contribuição, especial e da pessoa com deficiência',
      'Planejamento Previdenciário e Revisões de Benefícios',
      'Auxílio por incapacidade temporária, incapacidade permanente e auxílio-acidente',
      'Atuação administrativa e judicial',
      'Pensão por morte, Auxílio-reclusão, Salário-Maternidade e BPC/LOAS',
    ],
  },
  {
    title: 'Família e Sucessões',
    sub: 'Abrange as relações jurídicas, pessoais e patrimoniais originadas dos vínculos familiares e da transmissão de bens pós-morte.',
    icon: ArrowRightIcon,
    solucoes: [
      'Divórcio consensual ou litigioso',
      'Inventário extrajudicial e judicial para partilha de bens',
      'Reconhecimento e dissolução de União Estável',
      'Planejamento sucessório e testamentos',
      'Alimentos (Fixação, Revisão, Exoneração e Execução)',
    ],
  },
  {
    title: 'Direito Civil e Processo Civil',
    sub: 'Organiza as relações pessoais e patrimoniais do dia a dia. Seu conceito engloba toda a dinâmica da vida privada, sendo a base da convivência em sociedade.',
    icon: ArrowRightIcon,
    solucoes: [
      'Responsabilidade Civil (Ações de indenização por Danos Materiais e Morais)',
      'Elaboração de contratos',
      'Direito do Consumidor',
      'Diligências extrajudiciais',
      'Cobrança e execução de títulos judiciais e extrajudiciais',
    ],
  },
  {
    title: 'Direito Trabalhista',
    sub: 'Disciplina os vínculos de emprego e as relações de trabalho entre colaboradores e empregadores, garantindo a aplicação das normas tutelares e das convenções coletivas.',
    icon: ArrowRightIcon,
    solucoes: [
      'Horas extras, intervalos não concedidos e adicionais de insalubridade/periculosidade',
      'Indenização por Acidente de Trabalho, assédio moral e doenças ocupacionais',
      'Rescisão Indireta',
      'Execução Trabalhista',
      'Reconhecimento de Vínculo e Fraudes Trabalhistas',
    ],
  },
];

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

// Apenas 3 membros visíveis — array pode crescer dinamicamente
const TEAM = [
  {
    name: 'Dr. Evair Francisco Bona',
    role: 'Advogado titular',
    sub: 'OAB/SC 009562',
    description: 'Graduado em Direito pela Universidade Regional de Blumenau (FURB) no ano de 1993, aprofundou sua qualificação por meio de pós-graduações em Direito Civil e Processo Civil, exercendo a advocacia de forma autônoma e empresarial desde 1995. Especialista em Direito Previdenciário.',
    img: asset('assets/foto-evair.jpeg'),
  },
  {
    name: 'Marla Lindorfer dos Reis',
    role: 'Assistente Jurídico II',
    description: 'Graduada em Direito pela Unijuí.',
    img: asset('assets/foto-marla.jpeg'),
  },
  {
    name: 'Ana Júlia Bona',
    role: 'Assistente Jurídico',
    description: 'Graduanda em Direito pela PUCPR',
    img: asset('assets/foto-ana.png'),
  },
];

const PILARES = ['Ética', 'Seriedade', 'Atendimento Personalizado', 'Transparência'];

const SOCIAL = [
  { icon: IconWhatsapp, label: 'WhatsApp', href: WHATSAPP_URL },
  { icon: IconInstagram, label: 'Instagram', href: 'https://www.instagram.com/advocacia.efb/' },
  { icon: IconFacebook, label: 'Facebook', href: 'https://www.facebook.com/escritorioadvocaciaevairfbona' },
];

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1 && !href.startsWith('#/')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);


  const isLegalRoute =
    route === '#/termos' ||
    route === '#/politica-de-privacidade' ||
    route === '#/termos-de-uso' ||
    route.startsWith('#/termos') ||
    route.startsWith('#/politica');

  useEffect(() => {
    if (isLegalRoute) {
      return;
    }

    let ctx = gsap.context(() => {
      // Hero entrance imediato ao carregar
      gsap.fromTo(
        '.h3-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.1,
          clearProps: 'transform',
        }
      );

      // Itens da barra/banner: slide de baixo para cima e centraliza no meio apenas ao rolar para baixo
      gsap.fromTo(
        '.stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'sine.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#pilares',
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      );

      // Seções com revelação suave apenas ao rolar para baixo (once: true)
      gsap.utils.toArray('.reveal-section').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reset',
            },
          }
        );
      });

      // Cards da equipe com entrada escalonada suave apenas ao rolar para baixo
      gsap.fromTo(
        '.team-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#equipe',
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );

      // Destaque 30+ anos com entrada suave apenas ao rolar para baixo
      gsap.fromTo(
        '.slide-card-right',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '#sobre',
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );

      // Footer: slide de baixo para cima apenas ao rolar para baixo
      gsap.fromTo(
        '.footer-slide',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.footer-slide',
            start: 'top 100%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });
    return () => ctx.revert();
  }, [route, isLegalRoute]);

  if (isLegalRoute) {
    return (
      <TermosEPrivacidade
        onBack={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  return (
    <div className="theme-v3 relative bg-background text-primary font-sans overflow-x-clip">

      {/* ─── BOTÃO FLUTUANTE DO WHATSAPP ─── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <IconWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
      </a>

      {/* ─── NAVBAR ─── */}
      <nav className="navbar3 fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 md:px-12 lg:px-16 py-4 bg-dark/85 backdrop-blur-md border-b border-background/10 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-background hover:scale-105 transition-transform duration-300 inline-block origin-left">
            EFB<span className="text-accent ml-1">.</span> advocacia
          </a>
          <div className="hidden lg:flex gap-8 text-sm tracking-wide font-medium text-background/80">
            <a href="#sobre" className="hover:text-accent hover:scale-105 transition-all duration-200 inline-block">O Escritório</a>
            <a href="#atuacao" className="hover:text-accent hover:scale-105 transition-all duration-200 inline-block">Atuação</a>
            <a href="#equipe" className="hover:text-accent hover:scale-105 transition-all duration-200 inline-block">Equipe</a>
            <a href="#contato" className="hover:text-accent hover:scale-105 transition-all duration-200 inline-block">Contato</a>
          </div>
          {/* Botão Contato Direto */}
          <a
            href="#contato"
            className="btn-magnetic hidden lg:flex items-center gap-2 px-6 py-2.5 bg-accent text-dark text-sm font-semibold rounded-full hover:bg-accent-hover transition-all duration-300"
          >
            Contate-nos!
          </a>
          {/* Botão Hamburguer Mobile & Tablet */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 -mr-1 text-background/90 hover:text-accent focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile & Tablet Expansível */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-background/10' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-3.5 text-base font-medium text-background/90 pb-2">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              O Escritório
            </a>
            <a
              href="#atuacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href="#equipe"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              Nossa Equipe
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-accent transition-colors"
            >
              Contato
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 px-6 bg-accent text-dark text-sm font-semibold rounded-full hover:bg-accent-hover transition-all"
            >
              Contate-nos!
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[100dvh] lg:h-[100dvh] w-full max-w-[100vw] flex flex-col justify-center lg:justify-end pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-0 lg:pb-16 xl:pb-20 2xl:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
            alt="Biblioteca jurídica"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/85 to-dark-deep/65 backdrop-blur-[1px]" />
        </div>

        {/* Imagem EFB_OK no desktop (posicionada na parte inferior direita) */}
        <div className="h3-anim hidden lg:block absolute bottom-16 xl:bottom-20 2xl:bottom-24 right-6 lg:right-8 xl:right-12 z-10 pointer-events-none select-none">
          <img
            src={asset('assets/EFB_OK.png')}
            alt="EFB Advocacia"
            className="w-72 xl:w-80 2xl:w-96 h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full min-w-0">
          <div className="max-w-6xl">
            <p className="h3-anim text-xs sm:text-sm font-mono tracking-[0.14em] sm:tracking-[0.22em] text-accent uppercase mb-4 sm:mb-6 break-words">
              Escritório de Advocacia Evair Francisco Bona - OAB/SC 009562
            </p>
            <h1 className="h3-anim font-serif text-background leading-[1.1] sm:leading-[1.05]">
              <span className="block text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3">O direito não é uma simples ideia,</span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold italic">é uma força viva.</span>
            </h1>
            <p className="h3-anim mt-3.5 sm:mt-5 text-sm sm:text-base font-serif italic text-accent">
              — Rudolf von Ihering
            </p>
            <p className="h3-anim mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
              Fundado em 1995, o Escritório de Advocacia Evair Francisco Bona se dedica a oferecer serviços jurídicos com compromisso e transparência.
            </p>
            <div className="h3-anim mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#sobre"
                className="btn-magnetic inline-flex items-center justify-center gap-2 border border-background/30 text-background px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-background/10 transition-colors duration-300"
              >
                Conheça o Escritório
              </a>
              <a
                href="#atuacao"
                className="btn-magnetic inline-flex items-center justify-center gap-2 bg-accent text-dark px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-accent-hover transition-colors duration-300"
              >
                <span>Áreas de Atuação</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Logo no mobile e tablet abaixo do botão Áreas de Atuação */}
            <div className="h3-anim mt-8 sm:mt-10 lg:hidden flex justify-center sm:justify-start select-none pointer-events-none">
              <img
                src={asset('assets/EFB_OK.png')}
                alt="EFB Advocacia"
                className="w-48 sm:w-56 md:w-64 h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOBRE / LEAD ─── */}
      <section id="sobre" className="stats-section py-16 sm:py-24 lg:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text */}
            <div className="reveal-section">
              <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-6">O Escritório</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6 sm:mb-8">
                Tradição e seriedade que fazem a diferença.
              </h2>
              <p className="text-primary/70 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base md:text-lg text-justify indent-4 sm:indent-6">
                Fundado em 1995 pelo Dr. Evair Francisco Bona (OAB/SC 009562), o escritório construiu uma trajetória sólida pautada no profundo conhecimento jurídico, na ética e na transparência.
              </p>
              <p className="text-primary/70 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-justify indent-4 sm:indent-6">
                Ao longo de quase três décadas de atuação, o escritório evoluiu para oferecer um atendimento personalizado e de confiança. Nossa missão é entregar assessoramento jurídico com seriedade e domínio do assunto, atuando com ênfase nas áreas de Direito Previdenciário, Família e Sucessões, Direito Civil e Direito Trabalhista.
              </p>
              <a
                href="#equipe"
                className="inline-flex items-center gap-2 text-dark font-semibold text-sm border-b-2 border-accent pb-1 hover:text-accent hover:scale-105 transition-all duration-300 origin-left"
              >
                Conheça nossa equipe <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Destaque (30+ anos) */}
            <div className="self-stretch flex flex-col justify-center items-center lg:items-start lg:pl-12 xl:pl-16">
              {/* 30+ Anos de Experiência (escura) */}
              <div className="slide-card-right text-center lg:text-left origin-center lg:origin-left">
                <div className="transition-transform duration-300 hover:scale-105 cursor-default origin-center lg:origin-left">
                  <div className="animate-zoom-float origin-center lg:origin-left select-none">
                    <span className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] font-bold text-dark tracking-tight leading-none block">
                      30+
                    </span>
                    <span className="font-serif text-xl sm:text-3xl md:text-4xl text-dark/80 font-medium tracking-tight mt-3 sm:mt-4 block">
                      anos de experiência
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BARRA DIVISÓRIA / PILARES ─── */}
      <section id="pilares" className="py-8 lg:py-14 bg-dark border-y border-background/10 overflow-hidden">
        {/* Desktop: Grid estática com 4 colunas */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {PILARES.map((item, i) => (
            <div
              key={i}
              className="stat-item flex items-center justify-center px-4 py-1 border-r border-background/10 last:border-r-0 cursor-default"
            >
              <div className="group flex items-center gap-2.5 lg:gap-3 transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 transition-transform duration-300 group-hover:scale-150" />
                <span className="font-mono text-xs sm:text-sm lg:text-sm font-normal uppercase tracking-[0.12em] lg:tracking-[0.16em] text-accent whitespace-nowrap transition-all duration-300 group-hover:tracking-[0.18em] lg:group-hover:tracking-[0.22em]">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Carrossel infinito automático em loop contínuo */}
        <div className="lg:hidden w-full overflow-hidden select-none py-1">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...PILARES, ...PILARES, ...PILARES, ...PILARES].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-6 py-1 border-r border-background/10 shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-normal uppercase tracking-[0.12em] text-accent whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÁREAS DE ATUAÇÃO ─── */}
      <section id="atuacao" className="py-16 sm:py-24 lg:py-36 px-5 sm:px-8 md:px-12 lg:px-16 bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-10 sm:mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-4">Especialidades</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">Áreas de Atuação</h2>
          </div>

          {/* Cards Verticais de Áreas de Atuação */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="reveal-section bg-background border border-dark/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md hover:shadow-lg hover:scale-[1.01] lg:hover:scale-[1.02] transition-[transform,box-shadow] duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <Icon className="w-6 h-6 text-dark shrink-0" weight="bold" />
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-dark">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-primary/70 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                    {area.sub}
                  </p>

                  {/* Lista de Soluções com Checkmarks */}
                  {area.solucoes && (
                    <div className="bg-parchment/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-dark/10 mb-6 sm:mb-8">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-dark/70 font-bold mb-4">
                        Serviços prestados pelo escritório:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {area.solucoes.map((solucao, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary/80">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{solucao}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-dark font-semibold text-sm border-b-2 border-accent pb-1 hover:text-accent hover:scale-105 transition-all duration-300 origin-left w-fit"
                  >
                    Consultar sobre este serviço <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EQUIPE ─── */}
      <section id="equipe" className="team-section py-14 sm:py-16 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto reveal-section">
          <div className="mb-10 sm:mb-12">
            <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-4">Profissionais</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">Nossa Equipe</h2>
          </div>

          {/* Grid de membros da equipe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="team-card group bg-parchment/40 border border-dark/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-accent/40 hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-start min-h-[290px] sm:min-h-[310px]"
              >
                {/* Topo: Foto à esquerda + Cargo e Nome à direita */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-dark/5 border border-dark/10">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* CARGO */}
                    <span className="text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                      {member.role}
                    </span>
                    {/* NOME SOBRENOME */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-dark group-hover:text-accent transition-colors duration-200 leading-snug">
                      {member.name}
                    </h3>
                    {member.sub && (
                      <span className="text-xs font-mono text-dark/60 mt-0.5">
                        {member.sub}
                      </span>
                    )}
                  </div>
                </div>

                {/* Formação / Descrição */}
                <p className="text-primary/75 text-xs sm:text-sm leading-relaxed text-justify indent-6">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTATO + GOOGLE MAPS ─── */}
      <section id="contato" className="py-12 sm:py-14 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16 bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-6 lg:mb-8">
            <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-2">Entre em Contato</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark">Fale conosco</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Google Maps Widget */}
            <div className="reveal-section rounded-2xl overflow-hidden shadow-lg h-[280px] sm:h-[340px] lg:h-full min-h-[280px] lg:min-h-[280px]">
              <iframe
                title="Localização EFB Advocacia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.53614246592107!2d-49.27112951874732!3d-26.821553589795947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecc730a22fe1f7%3A0xef98c8ea7dbd3a7a!2sEscrit%C3%B3rio%20de%20Advocacia%20Evair%20Francisco%20Bona!5e0!3m2!1spt-BR!2sbr!4v1792893273772!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="w-full h-full min-h-[280px] lg:min-h-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between gap-5 lg:gap-6">
              <p className="text-sm text-primary/70 leading-relaxed">
                Entre em contato por nossos canais oficiais:
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { icon: Phone, label: 'Telefone', value: '(47) 3308-1340', href: 'tel:+554733081340' },
                  { icon: IconWhatsapp, label: 'WhatsApp', value: '(47) 99180-1340', href: WHATSAPP_URL, target: '_blank', rel: 'noopener noreferrer' },
                  { icon: Mail, label: 'E-mail', value: 'evairbona.adv@gmail.com', href: 'mailto:evairbona.adv@gmail.com' },
                  { icon: MapPin, label: 'Endereço', value: 'Rua Estados Unidos, nº 35 - Sala 103, 1º andar - Imigrantes, Timbó/SC - CEP 89090-084', href: 'https://maps.app.goo.gl/nBcrM5dJ9DXHvjUQ8', target: '_blank', rel: 'noopener noreferrer' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      className="group flex gap-3.5 items-start hover:text-accent transition-colors duration-200"
                    >
                      <div className="w-9 h-9 rounded-full border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:bg-dark group-hover:border-dark group-hover:scale-105 shrink-0">
                        <Icon className="w-4 h-4 text-accent group-hover:text-background transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-primary/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-primary text-sm font-medium whitespace-pre-line leading-snug">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Hours & CTA */}
              <div className="pt-4 border-t border-dark/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-mono text-primary/50 uppercase tracking-wider mb-1">Horário de Atendimento</p>
                  <p className="text-xs sm:text-sm text-primary font-normal">Segunda a Sexta-feira - 8h às 12h e 13h30 às 17h</p>
                  <p className="text-xs sm:text-sm text-primary font-normal mt-0.5">
                    <strong>Atendimento Presencial e On-line</strong>
                  </p>
                </div>

                <a
                  href="tel:+554733081340"
                  className="btn-magnetic inline-flex items-center justify-center gap-2 bg-dark text-background px-6 py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-dark-deep transition-all duration-300 w-fit shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer-slide bg-dark-deep text-background px-5 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-12 lg:pt-14 pb-8 lg:pb-10 rounded-t-[2.5rem] w-full border-t border-background/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between lg:justify-around gap-8 lg:gap-6 pb-8 lg:pb-10 border-b border-background/10">
            {/* Brand */}
            <div className="shrink-0 max-w-xs">
              <div className="font-serif text-2xl lg:text-3xl font-bold mb-3">
                EFB<span className="text-accent">.</span>
              </div>
              <p className="text-background/50 text-sm leading-relaxed mb-5">
                Escritório de Advocacia Evair Francisco Bona
              </p>
              {/* Ícones de redes sociais */}
              <div className="flex items-center gap-3">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-background/5 border border-background/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                  >
                    <Icon className="w-3.5 h-3.5 text-background/60 group-hover:text-dark transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="shrink-0">
              <h4 className="text-xs font-mono text-accent uppercase tracking-widest mb-3.5">Navegação</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'O Escritório', href: '#sobre' },
                  { label: 'Áreas de Atuação', href: '#atuacao' },
                  { label: 'Nossa Equipe', href: '#equipe' },
                  { label: 'Contato', href: '#contato' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="text-background/60 text-sm hover:text-background transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="shrink-0">
              <h4 className="text-xs font-mono text-accent uppercase tracking-widest mb-3.5">Legal</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Termos de Uso e Privacidade', href: '#/termos' },
                  {
                    label: 'Código de Ética OAB',
                    href: 'https://www.planalto.gov.br/ccivil_03/leis/l8906.htm',
                    external: true,
                  },
                  {
                    label: 'Provimento nº 205/2021 da OAB',
                    href: 'https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021',
                    external: true,
                  },
                  {
                    label: 'Tabela de Honorários OAB/SC',
                    href: 'https://oab-sc.org.br/honorarios',
                    external: true,
                  },
                ].map(({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Imagem EFB_OK no footer (centralizada no mobile e tablet) */}
            <div className="flex items-center justify-center lg:justify-end shrink-0 w-full lg:w-auto pt-2 lg:pt-0">
              <img
                src={asset('assets/EFB_OK.png')}
                alt="EFB Advocacia"
                className="w-48 sm:w-56 lg:w-64 h-auto drop-shadow-xl lg:-mt-6"
              />
            </div>
          </div>
          <div className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-col gap-1.5 shrink-0">
              <p className="text-background/30 font-mono text-xs">© 2026 EFB Advocacia. OAB/SC nº 009562. Todos os direitos reservados.</p>
              <a
                href="https://wa.me/5547991700140"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/25 hover:text-accent transition-colors w-fit font-mono text-xs"
              >
                Desenvolvido por LP Web Studio
              </a>
            </div>
            <p className="text-background/20 lg:text-right max-w-2xl">
              A publicidade profissional do advogado tem caráter meramente informativo e deve primar pela discrição e sobriedade, não podendo configurar captação de clientela ou mercantilização da profissão - Art. 39 do CED da OAB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
