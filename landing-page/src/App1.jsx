import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronRight, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

// ── Ícones de redes sociais como SVG inline ──
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconLinkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconFacebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconWhatsapp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const TEAM = [
  { name: 'Dr. Eduardo Ferreira', role: 'Sócio-fundador', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dra. Fernanda Braga', role: 'Sócia — Dir. Civil', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Bruno Almeida', role: 'Associado Sênior', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
];

const TIMELINE = [
  { year: '2006', title: 'Fundação', desc: 'EFB Advocacia é fundada com foco em direito empresarial e civil, atendendo empresas locais e regionais.' },
  { year: '2011', title: 'Expansão', desc: 'Crescimento expressivo leva à abertura de novas especialidades: Tributário, Trabalhista e Direito Internacional.' },
  { year: '2016', title: 'Reconhecimento Nacional', desc: 'Primeiro reconhecimento pela Análise Advocacia 500 como um dos melhores escritórios do país.' },
  { year: '2022', title: 'Nova Sede', desc: 'Inauguração da nova sede com espaços modernos e tecnológicos para melhor atender clientes em todo o Brasil.' },
  { year: 'Hoje', title: 'Referência', desc: '18 anos de história, mais de 2.400 casos concluídos e uma equipe comprometida com a excelência.' },
];

const SOCIAL = [
  { icon: IconInstagram, label: 'Instagram', href: '#' },
  { icon: IconLinkedin, label: 'LinkedIn', href: '#' },
  { icon: IconFacebook, label: 'Facebook', href: '#' },
  { icon: IconWhatsapp, label: 'WhatsApp', href: '#' },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App1() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const protocolRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );

      // Navbar Scroll
      ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: '.navbar' }
      });

      // Philosophy Reveal
      gsap.fromTo('.phil-text',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: "top 70%"
          }
        }
      );

      // Protocol Stacking
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(10px)',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true
            }
          });
        }
      });

      // Reveal Sections
      gsap.utils.toArray('.reveal-section').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: "top 80%"
            }
          }
        );
      });

      // Team Cards Stagger
      gsap.fromTo('.team-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.team-section',
            start: "top 70%"
          }
        }
      );

      // Timeline Items Stagger
      gsap.fromTo('.timeline-item',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-section',
            start: "top 75%"
          }
        }
      );
    });

    let isAnimating = false;
    const handleWheel = (e) => {
      if (!protocolRef.current) return;
      const protocolTop = protocolRef.current.offsetTop;
      const cardHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Active range: from 200px before the protocol section to the bottom of it
      if (scrollTop < protocolTop - 200 || scrollTop > protocolTop + 2 * cardHeight + 200) {
        return;
      }

      const snapPoints = [
        protocolTop,
        protocolTop + cardHeight,
        protocolTop + 2 * cardHeight
      ];

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        // Scroll Down
        const targetPoint = snapPoints.find(p => p > scrollTop + 10);
        if (targetPoint !== undefined) {
          e.preventDefault();
          isAnimating = true;
          gsap.to(window, {
            scrollTo: targetPoint,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              isAnimating = false;
            }
          });
        }
      } else if (e.deltaY < 0) {
        // Scroll Up
        const targetPoint = [...snapPoints].reverse().find(p => p < scrollTop - 10);
        if (targetPoint !== undefined) {
          e.preventDefault();
          isAnimating = true;
          gsap.to(window, {
            scrollTo: targetPoint,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              isAnimating = false;
            }
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      ctx.revert();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="relative bg-background text-primary font-sans">
      
      {/* NAVBAR */}
      <nav className="navbar fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-[2rem] w-[90%] max-w-5xl transition-all duration-300 bg-transparent text-primary [&.nav-scrolled]:bg-background/60 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:border [&.nav-scrolled]:border-dark/50">
        <div className="font-bold tracking-tight text-xl">EFB Advocacia</div>
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="#atuacao" className="hover:text-accent transition-colors">Atuação</a>
          <a href="#filosofia" className="hover:text-accent transition-colors">Filosofia</a>
          <a href="#equipe" className="hover:text-accent transition-colors">Equipe</a>
          <a href="#historia" className="hover:text-accent transition-colors">História</a>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </div>
        <a href="#contato" className="btn-magnetic bg-accent text-background px-6 py-2 rounded-full font-semibold text-sm select-none">
          <span className="relative z-10">Fale Conosco</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-8 md:px-16" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6">
          <h1 className="hero-anim">
            <div className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-primary/80">Excelência jurídica encontra</div>
            <div className="text-6xl md:text-9xl font-drama italic text-primary mt-2">a estratégia absoluta.</div>
          </h1>
          <p className="hero-anim text-lg md:text-xl text-primary/60 max-w-xl font-mono mt-4">
            Resolução de conflitos com segurança e visão inovadora para o seu negócio.
          </p>
          <div className="hero-anim mt-8">
            <button className="btn-magnetic bg-accent text-background px-8 py-4 rounded-full font-semibold flex items-center gap-2 group">
              <span className="relative z-10">Iniciar Diálogo</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES - MICRO UIs */}
      <section id="atuacao" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-accent mb-16 uppercase">Artefatos Funcionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-dark/40 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden h-[400px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Atendimento Personalizado</h3>
            <p className="text-sm text-primary/60 mb-8">Cada detalhe do seu caso tratado com precisão.</p>
            <div className="mt-auto relative h-32">
              <div className="absolute inset-x-0 bottom-4 bg-background border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-xl z-20">
                <span className="font-mono text-xs">Análise de Risco</span>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              </div>
              <div className="absolute inset-x-4 bottom-0 bg-background/50 border border-white/5 rounded-xl p-4 flex items-center shadow-md z-10 transform translate-y-2 scale-95">
                <span className="font-mono text-xs opacity-0">Pareceres</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-dark/40 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden h-[400px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Visão Inovadora</h3>
            <p className="text-sm text-primary/60 mb-8">Antecipando cenários para proteger seu negócio.</p>
            <div className="mt-auto bg-black/50 rounded-xl p-4 h-32 border border-white/10 font-mono text-xs text-accent overflow-hidden relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] text-white/50">LIVE</span>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div>&gt; Monitoramento preventivo iniciado...</div>
                <div>&gt; Análise contratual: 100%</div>
                <div className="flex">
                  <span>&gt; Compliance ativo</span>
                  <span className="w-2 h-4 bg-accent ml-1 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-dark/40 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden h-[400px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Resultados Sólidos</h3>
            <p className="text-sm text-primary/60 mb-8">Métricas reais para o seu crescimento.</p>
            <div className="mt-auto bg-background rounded-xl p-4 border border-white/10 flex flex-col gap-3">
              <div className="flex justify-between text-xs font-mono text-primary/50 mb-2">
                <span>D</span><span>S</span><span>T</span><span>Q</span><span className="text-accent font-bold">Q</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className={`h-4 rounded-sm ${i === 11 ? 'bg-accent' : 'bg-white/5'}`}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="philosophy-section relative py-40 px-8 md:px-16 bg-black" ref={philosophyRef}>
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 text-center md:text-left">
          <p className="phil-text text-xl md:text-3xl font-sans tracking-tight text-primary/60">
            A maioria da advocacia foca em processos reativos.
          </p>
          <p className="phil-text text-4xl md:text-7xl font-drama italic text-primary leading-tight">
            Nós focamos em <span className="text-accent">inteligência estratégica.</span>
          </p>
        </div>
      </section>

      {/* PROTOCOLO EMPILHÁVEL */}
      <section className="relative w-full bg-background" ref={protocolRef}>
        {[1, 2, 3].map((step) => (
          <div key={step} className="protocol-card h-[100dvh] w-full flex items-center justify-center p-8 sticky top-0 bg-background">
            <div className="w-full max-w-6xl h-[80vh] rounded-[3rem] bg-dark border border-white/10 relative overflow-hidden flex flex-col md:flex-row p-12 shadow-2xl">
              <div className="md:w-1/2 flex flex-col justify-center gap-6 relative z-10">
                <span className="font-mono text-4xl text-accent">0{step}</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  {step === 1 && "Diagnóstico Profundo"}
                  {step === 2 && "Estratégia Blindada"}
                  {step === 3 && "Execução Implacável"}
                </h3>
                <p className="text-lg text-primary/60 max-w-md">
                  {step === 1 && "Entendemos seu negócio na raiz. Levantamento completo de riscos e oportunidades antes de qualquer movimento."}
                  {step === 2 && "Desenhamos a arquitetura jurídica perfeita para o seu caso, combinando inovação e precedentes sólidos."}
                  {step === 3 && "Ação direta nos fóruns, negociações e tribunais com precisão cirúrgica para garantir o resultado esperado."}
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center relative opacity-20 md:opacity-50 mt-12 md:mt-0">
                 {/* Placeholder for SVG animation based on step */}
                 <div className="w-64 h-64 border border-accent rounded-full animate-spin-slow relative flex items-center justify-center">
                    <div className="w-48 h-48 border border-primary/50 rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="team-section py-24 md:py-36 px-8 md:px-16 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-4">Profissionais</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Nossa Equipe</h2>
            </div>
            <p className="text-primary/60 max-w-sm text-sm leading-relaxed">
              Advogados especializados, comprometidos com a excelência em cada caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="team-card group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer bg-dark/20 border border-white/5 shadow-2xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-serif text-primary font-bold text-sm leading-tight">{member.name}</p>
                  <p className="text-accent text-xs mt-1">{member.role}</p>
                </div>
                {/* Label estático para celular */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                  <p className="font-serif text-primary font-bold text-xs">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="timeline-section py-24 md:py-36 px-8 md:px-16 overflow-hidden bg-background relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-4">Trajetória</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Uma história de resultado.</h2>
          </div>

          {/* Wrapper de scroll horizontal */}
          <div className="relative overflow-x-auto pb-6 -mx-8 md:-mx-16 px-8 md:px-16">
            <div className="flex gap-0 min-w-max md:min-w-0 md:grid md:grid-cols-5">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className="timeline-item relative flex flex-col w-56 md:w-auto"
                >
                  {/* Linha conectora */}
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent border-2 border-background shadow z-10 shrink-0" />
                    {i < TIMELINE.length - 1 && (
                      <div className="flex-1 h-px bg-accent/25 min-w-[60px]" />
                    )}
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="pr-6 md:pr-4">
                    <span className="font-mono text-xs font-bold text-accent tracking-widest block mb-1">{item.year}</span>
                    <h3 className="font-serif text-lg font-bold text-primary mb-2 leading-snug">{item.title}</h3>
                    <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO + LOCALIZAÇÃO */}
      <section id="contato" className="py-24 md:py-36 px-8 md:px-16 bg-background relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section mb-16">
            <p className="text-xs font-mono tracking-[0.2em] text-accent uppercase mb-4">Entre em Contato</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Fale com nossos especialistas.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Google Maps */}
            <div className="reveal-section rounded-2xl overflow-hidden shadow-xl h-[420px] md:h-full min-h-[420px] border border-white/10">
              <iframe
                title="Localização EFB Advocacia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976924676867!2d-46.65454652376957!3d-23.56481026143703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718300000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-10 justify-center">
              <p className="text-sm text-primary/70 leading-relaxed">
                Estamos prontos para atender você. Entre em contato por telefone, e-mail ou visite nosso escritório para agendar uma consulta com um de nossos especialistas.
              </p>

              {[
                { icon: Phone, label: 'Telefone', value: '+55 (11) 3000-0000', href: 'tel:+551130000000' },
                { icon: Mail, label: 'E-mail', value: 'contato@efbadvocacia.com.br', href: 'mailto:contato@efbadvocacia.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Av. Paulista, 1000 — 12° andar\nSão Paulo — SP, 01310-100', href: '#' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href} className="group flex gap-4 items-start hover:text-accent transition-colors duration-200">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-primary/50 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-primary text-sm font-medium whitespace-pre-line">{item.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Horário */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-mono text-primary/50 uppercase tracking-wider mb-3">Horário de Atendimento</p>
                <p className="text-sm text-primary">Segunda a Sexta — 9h às 18h</p>
                <p className="text-sm text-primary">Sábados — 9h às 12h (com agendamento)</p>
              </div>

              {/* Botão */}
              <a
                href="tel:+551130000000"
                className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors duration-300 w-fit select-none"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050508] mt-32 rounded-t-[4rem] px-8 md:px-16 pt-16 md:pt-24 pb-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-serif text-3xl font-bold mb-4">
                EFB<span className="text-accent">.</span>
              </div>
              <p className="text-primary/50 text-sm leading-relaxed max-w-xs mb-8">
                Advocacia de excelência com tradição e visão estratégica para resultados que transformam vidas e negócios.
              </p>
              {/* Redes sociais */}
              <div className="flex items-center gap-3">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-primary/60 group-hover:text-background transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">Navegação</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Atuação', href: '#atuacao' },
                  { label: 'Filosofia', href: '#filosofia' },
                  { label: 'Nossa Equipe', href: '#equipe' },
                  { label: 'História', href: '#historia' },
                  { label: 'Contato', href: '#contato' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="text-primary/60 text-sm hover:text-primary transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">Legal</h4>
              <div className="flex flex-col gap-3">
                {['Política de Privacidade', 'Termos de Uso', 'Código de Ética OAB'].map((link) => (
                  <a key={link} href="#" className="text-primary/60 text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-primary/30 text-xs font-mono">© 2026 EFB Advocacia. OAB/SP nº 000.000. Todos os direitos reservados.</p>
            <p className="text-primary/20 text-xs font-mono">Advocacia não admite publicidade — conforme Art. 39 do CED da OAB.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
