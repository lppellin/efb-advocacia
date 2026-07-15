import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-background text-primary font-sans">
      <div className="noise-overlay"></div>
      
      {/* NAVBAR */}
      <nav className="navbar fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-[2rem] w-[90%] max-w-5xl transition-all duration-300 bg-transparent text-primary [&.nav-scrolled]:bg-background/60 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:border [&.nav-scrolled]:border-dark/50">
        <div className="font-bold tracking-tight text-xl">EFB Advocacia</div>
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="#atuacao" className="hover:text-accent transition-colors">Atuação</a>
          <a href="#filosofia" className="hover:text-accent transition-colors">Filosofia</a>
        </div>
        <button className="btn-magnetic bg-accent text-background px-6 py-2 rounded-full font-semibold text-sm">
          <span className="relative z-10">Fale Conosco</span>
        </button>
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

      {/* FOOTER */}
      <footer className="bg-[#050508] mt-32 rounded-t-[4rem] px-8 md:px-16 pt-24 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="text-3xl font-bold">EFB Advocacia</div>
            <p className="text-primary/50 font-mono text-sm max-w-xs">Excelência jurídica e estratégia para o seu negócio.</p>
            <div className="flex items-center gap-3 mt-4 px-4 py-2 bg-dark/50 rounded-full w-fit border border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-xs">Sistema Operacional Online</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-accent mb-2 uppercase text-xs tracking-widest">Navegação</h4>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors">Atuação</a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors">Equipe</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-accent mb-2 uppercase text-xs tracking-widest">Contato</h4>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors">contato@efbadvocacia.com.br</a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors">+55 11 9999-9999</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
