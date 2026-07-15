import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App2() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation - SplitText like effect
      gsap.fromTo('.hero-anim',
        { y: 60, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.1, ease: 'power3.out' }
      );

      ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: '.navbar' }
      });

      // Protocol Stacking
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.3,
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
    <div className="relative bg-[#09090D] text-primary font-sans">
      <div className="noise-overlay"></div>
      
      {/* NAVBAR */}
      <nav className="navbar fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-10 py-5 rounded-[3rem] w-[95%] max-w-6xl transition-all duration-500 bg-transparent text-primary [&.nav-scrolled]:bg-[#0D0D12]/80 [&.nav-scrolled]:backdrop-blur-2xl [&.nav-scrolled]:border [&.nav-scrolled]:border-accent/20">
        <div className="font-bold tracking-widest text-lg uppercase flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded-sm rotate-45"></div>
          EFB
        </div>
        <button className="btn-magnetic bg-transparent border border-accent/50 text-accent hover:bg-accent hover:text-background px-8 py-3 rounded-full font-semibold text-sm transition-colors">
          <span className="relative z-10">Fale Conosco</span>
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-end pb-32 px-8 md:px-24" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover grayscale opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-[#09090D]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-4">
          <h1 className="hero-anim" style={{ perspective: '1000px' }}>
            <div className="text-2xl md:text-4xl font-bold tracking-tight uppercase text-accent mb-4">A precisão que o seu negócio exige</div>
            <div className="text-7xl md:text-[10rem] font-drama italic text-primary leading-[0.85]">Estratégia absoluta.</div>
          </h1>
          <div className="hero-anim mt-12">
            <button className="btn-magnetic bg-primary text-background px-10 py-5 rounded-full font-bold flex items-center gap-3 group text-lg">
              <span className="relative z-10">Solicitar Análise</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="atuacao" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111116] border border-white/5 rounded-[2rem] p-10 h-[450px] flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <h3 className="text-3xl font-bold mb-4">Atendimento Personalizado</h3>
              <p className="text-sm text-primary/50">Cada detalhe do seu caso tratado com precisão cirúrgica.</p>
            </div>
            <div className="text-accent text-6xl font-drama italic opacity-50">01</div>
          </div>
          <div className="bg-[#111116] border border-white/5 rounded-[2rem] p-10 h-[450px] flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <h3 className="text-3xl font-bold mb-4">Visão Inovadora</h3>
              <p className="text-sm text-primary/50">Antecipando cenários legais complexos.</p>
            </div>
            <div className="text-accent text-6xl font-drama italic opacity-50">02</div>
          </div>
          <div className="bg-[#111116] border border-white/5 rounded-[2rem] p-10 h-[450px] flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <h3 className="text-3xl font-bold mb-4">Foco em Resultados</h3>
              <p className="text-sm text-primary/50">Estratégias construídas para a vitória corporativa.</p>
            </div>
            <div className="text-accent text-6xl font-drama italic opacity-50">03</div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="relative py-48 px-8 md:px-16 bg-[#050508]">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-sans tracking-tight text-primary/40 mb-8">
            A maioria da advocacia foca em apagar incêndios.
          </p>
          <p className="text-5xl md:text-8xl font-drama italic text-primary leading-tight">
            Nós focamos em <br/><span className="text-accent">construir impérios.</span>
          </p>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-primary/30 font-mono text-sm border-t border-white/5">
        <p>EFB Advocacia © 2026. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
