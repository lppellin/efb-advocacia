import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Mail, MapPin, Scale, Shield, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AREAS = [
  {
    title: 'Direito Civil',
    sub: 'Contratos, responsabilidade civil, questões patrimoniais e disputas entre particulares com profundidade técnica.',
    icon: Scale,
  },
  {
    title: 'Direito Empresarial',
    sub: 'Assessoria jurídica completa para empresas: societário, fusões, aquisições e governança corporativa.',
    icon: Shield,
  },
  {
    title: 'Direito Trabalhista',
    sub: 'Defesa de empregadores e empregados em processos trabalhistas, negociações e acordos coletivos.',
    icon: Users,
  },
  {
    title: 'Direito Tributário',
    sub: 'Planejamento fiscal, defesa em autuações administrativas e recuperação de créditos tributários.',
    icon: Award,
  },
];

const TEAM = [
  { name: 'Dr. Eduardo Ferreira', role: 'Sócio-fundador', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dra. Fernanda Braga', role: 'Sócia — Dir. Civil', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Bruno Almeida', role: 'Associado Sênior', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dra. Clara Matos', role: 'Associada — Tributário', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Rodrigo Lima', role: 'Associado — Trabalhista', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
];

const STATS = [
  { value: '18+', label: 'Anos de Experiência' },
  { value: '2.400+', label: 'Casos Concluídos' },
  { value: '98%', label: 'Taxa de Sucesso' },
  { value: '340+', label: 'Clientes Ativos' },
];

const AWARDS = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OAB_logo.svg/200px-OAB_logo.svg.png',
];

export default function App3() {
  const heroRef = useRef(null);
  const [activeArea, setActiveArea] = useState(0);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.h3-anim',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.18, ease: 'power3.out', delay: 0.2 }
      );

      // Navbar scroll behavior
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'nav3-scrolled', targets: '.navbar3' },
      });

      // Stats counter animation
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-section', start: 'top 75%' },
        }
      );

      // Section reveals
      gsap.utils.toArray('.reveal-section').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        );
      });

      // Team cards stagger
      gsap.fromTo(
        '.team-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.team-section', start: 'top 70%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#F4F0E8] text-[#1C1C1C] font-sans overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav className="navbar3 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-400">
        <div className="font-serif text-2xl font-bold tracking-tight text-[#F4F0E8] [.nav3-scrolled_&]:text-[#1A3A28]">
          EFB<span className="text-[#B8860B] ml-1">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm tracking-wide font-medium text-[#F4F0E8]/80 [.nav3-scrolled_&]:text-[#1A3A28]/80">
          <a href="#sobre" className="hover:text-[#B8860B] transition-colors duration-200">O Escritório</a>
          <a href="#atuacao" className="hover:text-[#B8860B] transition-colors duration-200">Atuação</a>
          <a href="#equipe" className="hover:text-[#B8860B] transition-colors duration-200">Equipe</a>
          <a href="#contato" className="hover:text-[#B8860B] transition-colors duration-200">Contato</a>
        </div>
        <a
          href="#contato"
          className="btn3-cta hidden md:flex items-center gap-2 px-6 py-2.5 border border-[#F4F0E8]/60 text-[#F4F0E8] text-sm font-semibold rounded-full hover:bg-[#F4F0E8] hover:text-[#1A3A28] transition-all duration-300 [.nav3-scrolled_&]:border-[#1A3A28]/50 [.nav3-scrolled_&]:text-[#1A3A28] [.nav3-scrolled_&]:hover:bg-[#1A3A28] [.nav3-scrolled_&]:hover:text-[#F4F0E8]"
        >
          Fale Conosco
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-[100dvh] w-full flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-16"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
            alt="Biblioteca jurídica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F18]/90 via-[#0D1F18]/50 to-[#0D1F18]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <p className="h3-anim text-xs md:text-sm font-mono tracking-[0.25em] text-[#B8860B] uppercase mb-6">
              Escritório de Advocacia — Fundado em 2006
            </p>
            <h1 className="h3-anim font-serif text-[#F4F0E8] leading-[1.05]">
              <span className="block text-4xl md:text-6xl font-bold mb-2">A liberdade de</span>
              <span className="block text-6xl md:text-9xl font-bold italic">não ter medo.</span>
            </h1>
            <p className="h3-anim mt-8 text-base md:text-lg text-[#F4F0E8]/70 max-w-2xl leading-relaxed">
              Há mais de 18 anos, combinamos rigor técnico e visão estratégica para garantir a melhor defesa dos interesses dos nossos clientes.
            </p>
            <div className="h3-anim mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="btn-magnetic inline-flex items-center gap-2 bg-[#B8860B] text-[#F4F0E8] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#A07808] transition-colors duration-300"
              >
                <span>Consulta Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sobre"
                className="btn-magnetic inline-flex items-center gap-2 border border-[#F4F0E8]/30 text-[#F4F0E8] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#F4F0E8]/10 transition-colors duration-300"
              >
                Conheça o Escritório
              </a>
            </div>
          </div>
        </div>

        {/* Hero bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#F4F0E8]/10">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex flex-wrap gap-6 md:gap-12">
            {STATS.map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#B8860B]">{s.value}</span>
                <span className="text-[#F4F0E8]/50 text-xs font-mono">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOBRE / LEAD ─── */}
      <section id="sobre" className="stats-section py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text */}
            <div className="reveal-section">
              <p className="text-xs font-mono tracking-[0.2em] text-[#B8860B] uppercase mb-6">O Escritório</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#1A3A28] leading-tight mb-8">
                Tradição e inovação a serviço da justiça.
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6 text-base md:text-lg">
                EFB Advocacia é um escritório full-service reconhecido pela excelência técnica e pelo compromisso com cada cliente. Nossa equipe combina décadas de experiência com uma abordagem estratégica e personalizada para cada caso.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-10 text-base md:text-lg">
                Atendemos pessoas físicas, empresas de médio e grande porte e grupos internacionais, oferecendo soluções jurídicas completas em todas as esferas do Direito.
              </p>
              <a
                href="#equipe"
                className="inline-flex items-center gap-2 text-[#1A3A28] font-semibold text-sm border-b-2 border-[#B8860B] pb-1 hover:text-[#B8860B] transition-colors duration-200"
              >
                Conheça nossa equipe <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Image stack */}
            <div className="reveal-section relative h-[480px] md:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800&auto=format&fit=crop"
                alt="Escritório"
                className="absolute top-0 right-0 w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop"
                alt="Reunião de escritório"
                className="absolute bottom-0 left-0 w-3/5 h-2/5 object-cover rounded-2xl shadow-xl border-4 border-[#F4F0E8]"
              />
              {/* Floating badge */}
              <div className="absolute bottom-[38%] right-[5%] bg-[#1A3A28] text-[#F4F0E8] px-4 py-3 rounded-xl shadow-xl flex flex-col items-center">
                <span className="font-serif text-3xl font-bold text-[#B8860B]">18+</span>
                <span className="text-[10px] font-mono text-[#F4F0E8]/70 text-center leading-tight mt-1">Anos de<br/>Atuação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="h-px bg-[#1A3A28]/15" />
      </div>

      {/* ─── STATS BAND ─── */}
      <section className="py-20 px-8 md:px-16 bg-[#1A3A28]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item flex flex-col items-center text-center px-4 py-6 border-r border-[#F4F0E8]/10 last:border-r-0">
              <span className="font-serif text-4xl md:text-5xl font-bold text-[#B8860B] mb-2">{s.value}</span>
              <span className="text-[#F4F0E8]/60 text-xs font-mono tracking-wider uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MANIFESTO BANNER ─── */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Advogado"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto reveal-section">
          <p className="text-sm md:text-base text-[#6B6B6B] mb-6 font-mono tracking-wider">
            A maioria dos escritórios foca em honorários.
          </p>
          <p className="font-serif text-4xl md:text-7xl font-bold text-[#1A3A28] leading-tight">
            Nós focamos em{' '}
            <em className="text-[#B8860B] not-italic">resultados reais</em>{' '}
            para as pessoas.
          </p>
        </div>
      </section>

      {/* ─── ÁREAS DE ATUAÇÃO ─── */}
      <section id="atuacao" className="py-24 md:py-36 px-8 md:px-16 bg-[#EDE8DC]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-[#B8860B] uppercase mb-4">Especialidades</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A3A28]">Áreas de Atuação</h2>
          </div>

          {/* Tab navigation */}
          <div className="flex flex-col md:flex-row gap-0 border border-[#1A3A28]/20 rounded-2xl overflow-hidden shadow-lg">
            {/* Sidebar */}
            <div className="md:w-72 bg-[#1A3A28] flex flex-row md:flex-col">
              {AREAS.map((area, i) => {
                const Icon = area.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveArea(i)}
                    className={`flex items-center gap-3 px-5 py-5 md:px-6 md:py-6 text-left transition-all duration-200 border-b border-[#F4F0E8]/10 last:border-b-0 flex-1 md:flex-none ${
                      activeArea === i
                        ? 'bg-[#B8860B] text-[#F4F0E8]'
                        : 'text-[#F4F0E8]/60 hover:text-[#F4F0E8] hover:bg-[#F4F0E8]/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="font-semibold text-sm hidden md:block">{area.title}</span>
                  </button>
                );
              })}
            </div>
            {/* Content */}
            <div className="flex-1 bg-[#F4F0E8] p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3A28] mb-4">
                  {AREAS[activeArea].title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg max-w-xl">
                  {AREAS[activeArea].sub}
                </p>
              </div>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 text-[#1A3A28] font-semibold text-sm border-b-2 border-[#B8860B] pb-1 hover:text-[#B8860B] transition-colors w-fit"
              >
                Consultar sobre este serviço <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EQUIPE ─── */}
      <section id="equipe" className="team-section py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-[#B8860B] uppercase mb-4">Profissionais</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A3A28]">Nossa Equipe</h2>
            </div>
            <p className="text-[#4A4A4A] max-w-sm text-sm leading-relaxed">
              Advogados especializados, comprometidos com a excelência em cada caso.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="team-card group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A28]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-serif text-[#F4F0E8] font-bold text-sm leading-tight">{member.name}</p>
                  <p className="text-[#B8860B] text-xs mt-1">{member.role}</p>
                </div>
                {/* Static label visible always on mobile */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#1A3A28]/80 to-transparent">
                  <p className="font-serif text-[#F4F0E8] font-bold text-xs">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRÊMIOS / RECONHECIMENTOS ─── */}
      <section className="py-16 px-8 md:px-16 bg-[#EDE8DC] border-y border-[#1A3A28]/10">
        <div className="max-w-7xl mx-auto reveal-section">
          <p className="text-center text-xs font-mono tracking-[0.2em] text-[#6B6B6B] uppercase mb-10">Reconhecimentos & Certificações</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {/* Award badges as text-based badges since we can't load OAB SVG reliably */}
            {['OAB — SP', 'Chambers & Partners', 'Legal 500', 'Análise Advocacia 500', 'IBRADEMP'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2 border border-[#1A3A28]/30 rounded-full">
                <Award className="w-3.5 h-3.5 text-[#B8860B]" />
                <span className="text-[#1A3A28] text-xs font-mono font-semibold tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE / HISTÓRIA ─── */}
      <section className="py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-[#B8860B] uppercase mb-4">Trajetória</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A3A28]">Uma história de resultado.</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#1A3A28]/15 -translate-x-1/2" />
            {[
              { year: '2006', title: 'Fundação do Escritório', desc: 'EFB Advocacia é fundada com foco em direito empresarial e civil, atendendo empresas locais e regionais.' },
              { year: '2011', title: 'Expansão da Equipe', desc: 'Crescimento expressivo leva à abertura de novas especialidades: Tributário, Trabalhista e Direito Internacional.' },
              { year: '2016', title: 'Reconhecimento Nacional', desc: 'Primeiro reconhecimento pela Análise Advocacia 500 como um dos melhores escritórios do país na categoria Empresarial.' },
              { year: '2022', title: 'Nova Sede & Estrutura', desc: 'Inauguração da nova sede, com espaços modernos e tecnológicos para melhor atender clientes em todo o Brasil.' },
              { year: 'Hoje', title: 'Referência em Estratégia', desc: '18 anos de história, mais de 2.400 casos concluídos e uma equipe comprometida com a excelência e a confiança.' },
            ].map((item, i) => (
              <div key={i} className={`reveal-section relative flex flex-col md:flex-row gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 flex md:justify-end pl-10 md:pl-0">
                  <div className={`max-w-md ${i % 2 === 1 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <span className="font-mono text-xs text-[#B8860B] tracking-widest">{item.year}</span>
                    <h3 className="font-serif text-2xl font-bold text-[#1A3A28] mt-1 mb-3">{item.title}</h3>
                    <p className="text-[#4A4A4A] leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
                {/* Circle marker */}
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 bg-[#B8860B] rounded-full -translate-x-1/2 border-2 border-[#F4F0E8] shadow" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 px-8 md:px-16 bg-[#1A3A28]">
        <div className="max-w-4xl mx-auto text-center reveal-section">
          <p className="font-serif text-3xl md:text-5xl italic text-[#F4F0E8] leading-relaxed mb-8">
            "A EFB não apenas resolveu nosso problema jurídico — nos deu segurança para crescer sem medo."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B8860B]">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Cliente" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-[#F4F0E8] font-semibold text-sm">Carlos Mendonça</p>
              <p className="text-[#B8860B] text-xs font-mono">CEO, Grupo Mendonça</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTATO ─── */}
      <section id="contato" className="py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-[#B8860B] uppercase mb-4">Entre em Contato</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A3A28]">Fale com nossos especialistas.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Form */}
            <div>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {[
                  { id: 'nome', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
                  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                  { id: 'telefone', label: 'Telefone', type: 'tel', placeholder: '(11) 99999-9999' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className="text-xs font-mono tracking-wider text-[#6B6B6B] uppercase">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-transparent border-b-2 border-[#1A3A28]/25 focus:border-[#B8860B] outline-none py-3 text-[#1C1C1C] text-sm placeholder:text-[#A0A0A0] transition-colors duration-200"
                      value={formData[field.id]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="mensagem" className="text-xs font-mono tracking-wider text-[#6B6B6B] uppercase">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    placeholder="Descreva brevemente o seu caso..."
                    className="bg-transparent border-b-2 border-[#1A3A28]/25 focus:border-[#B8860B] outline-none py-3 text-[#1C1C1C] text-sm placeholder:text-[#A0A0A0] transition-colors duration-200 resize-none"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-magnetic mt-2 bg-[#1A3A28] text-[#F4F0E8] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#0D1F18] transition-colors duration-300 flex items-center gap-2 w-fit"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
            {/* Info */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8">
                  Estamos prontos para atender você. Entre em contato por telefone, e-mail ou preencha o formulário para agendar uma consulta com um de nossos especialistas.
                </p>
              </div>
              {[
                { icon: Phone, label: 'Telefone', value: '+55 (11) 3000-0000', href: 'tel:+551130000000' },
                { icon: Mail, label: 'E-mail', value: 'contato@efbadvocacia.com.br', href: 'mailto:contato@efbadvocacia.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Av. Paulista, 1000 — 12° andar\nSão Paulo — SP, 01310-100', href: '#' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href} className="group flex gap-4 items-start hover:text-[#B8860B] transition-colors duration-200">
                    <div className="w-10 h-10 rounded-full border border-[#1A3A28]/20 flex items-center justify-center group-hover:border-[#B8860B] transition-colors">
                      <Icon className="w-4 h-4 text-[#B8860B]" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[#1C1C1C] text-sm font-medium whitespace-pre-line">{item.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Hours */}
              <div className="pt-6 border-t border-[#1A3A28]/10">
                <p className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-3">Horário de Atendimento</p>
                <p className="text-sm text-[#1C1C1C]">Segunda a Sexta — 9h às 18h</p>
                <p className="text-sm text-[#1C1C1C]">Sábados — 9h às 12h (com agendamento)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0D1F18] text-[#F4F0E8] px-8 md:px-16 pt-16 md:pt-24 pb-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#F4F0E8]/10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-serif text-3xl font-bold mb-4">
                EFB<span className="text-[#B8860B]">.</span>
              </div>
              <p className="text-[#F4F0E8]/50 text-sm leading-relaxed max-w-xs mb-8">
                Advocacia de excelência com tradição e visão estratégica para resultados que transformam vidas e negócios.
              </p>
              <div className="flex items-center gap-3 px-4 py-2 bg-[#F4F0E8]/5 rounded-full w-fit border border-[#F4F0E8]/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-[#F4F0E8]/60">Sistema Online</span>
              </div>
            </div>
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-6">Navegação</h4>
              <div className="flex flex-col gap-3">
                {['O Escritório', 'Áreas de Atuação', 'Nossa Equipe', 'Publicações', 'Contato'].map((link) => (
                  <a key={link} href="#" className="text-[#F4F0E8]/60 text-sm hover:text-[#F4F0E8] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-6">Legal</h4>
              <div className="flex flex-col gap-3">
                {['Política de Privacidade', 'Termos de Uso', 'Código de Ética OAB'].map((link) => (
                  <a key={link} href="#" className="text-[#F4F0E8]/60 text-sm hover:text-[#F4F0E8] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-[#F4F0E8]/30 text-xs font-mono">© 2026 EFB Advocacia. OAB/SP nº 000.000. Todos os direitos reservados.</p>
            <p className="text-[#F4F0E8]/20 text-xs font-mono">Advocacia não admite publicidade — conforme Art. 39 do CED da OAB.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
