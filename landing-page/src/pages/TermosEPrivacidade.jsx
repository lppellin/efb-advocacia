import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileText, Scale } from 'lucide-react';

export default function TermosEPrivacidade({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-v3 min-h-screen bg-background text-primary font-sans flex flex-col justify-between">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-16 py-4 bg-dark/85 backdrop-blur-md border-b border-background/10 shadow-md transition-all duration-300">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="font-serif text-2xl font-bold tracking-tight text-background hover:scale-105 transition-transform duration-300 inline-block origin-left"
        >
          EFB<span className="text-accent ml-1">.</span>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-dark text-xs sm:text-sm font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </a>
      </nav>

      {/* ─── CONTEÚDO PRINCIPAL ─── */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
        {/* Cabeçalho do Documento */}
        <div className="mb-10 text-center sm:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Informações Legais e Institucionais
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
            Política de Privacidade e Termos de Uso
          </h1>
          <p className="font-mono text-xs text-primary/60">
            EVAIR FRANCISCO BONA SOCIEDADE INDIVIDUAL DE ADVOCACIA • CNPJ nº 29.986.366/0001-63 • OAB/SC nº 009562 • Timbó/SC
          </p>
        </div>

        {/* Artigo / Conteúdo Unificado */}
        <div className="bg-background border border-dark/15 rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm space-y-10 text-primary/80 leading-relaxed text-sm sm:text-base text-justify">
          {/* ─── PARTE 1: POLÍTICA DE PRIVACIDADE ─── */}
          <section id="privacidade" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/5 border border-dark/10 text-accent font-mono text-xs uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Privacidade e Proteção de Dados</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark">
              Política de Privacidade
            </h2>

            <div className="space-y-3 pt-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-dark">
                1. Das Informações Gerais e de Compromisso
              </h3>
              <p className="indent-6">
                Este site e os serviços correspondentes são mantidos por <strong>EVAIR FRANCISCO BONA</strong>, advogado inscrito na OAB/SC n.° 009562, titular da Sociedade — <strong>EVAIR FRANCISCO BONA SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong> —, inscrita no CNPJ nº 29.986.366/0001-63, Contrato Social registrado na OAB/SC, no Livro B-561, às folhas 68 e 69, sob o nº 04026/2017, pessoa jurídica de direito privado, com sede em Timbó/SC. O escritório reconhece a importância da privacidade e da confidencialidade das informações de seus clientes, parceiros e usuários deste site.
              </p>
              <p className="indent-6">
                Tratamos, coletamos, utilizamos, armazenamos e protegemos os seus dados pessoais em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), o Estatuto da Advocacia e da OAB (Lei nº 8.906/1994) e o Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </section>

          {/* ─── PARTE 2: TERMOS DE USO ─── */}
          <section id="termos" className="pt-8 border-t border-dark/15 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/5 border border-dark/10 text-accent font-mono text-xs uppercase tracking-widest mb-1">
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Condições e Regras de Uso</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mt-2">
                Termos de Uso
              </h2>
            </div>

            <div className="p-5 rounded-2xl bg-parchment/70 border border-dark/10 flex items-start gap-3.5">
              <Scale className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-dark mb-1">
                  Caráter Meramente Informativo (Art. 39 do CED da OAB)
                </h4>
                <p className="text-xs sm:text-sm text-primary/80 leading-relaxed indent-6">
                  A publicidade profissional da advocacia possui finalidade exclusivamente ilustrativa e informativa, com discrição e sobriedade, vedada qualquer mercantilização ou captação indevida de clientela.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-dark">
                2. Da Natureza Meramente Informativa
              </h3>
              <p className="indent-6">
                As informações, resumos de áreas de atuação e conteúdos disponibilizados neste site têm caráter meramente informativo e educacional. Eles <strong>não constituem</strong> parecer jurídico formal, assessoria, consultoria ou aconselhamento legal específico para o seu caso particular.
              </p>
              <p className="indent-6">
                O simples envio de mensagens ou solicitação de contato por meio do site, formulários ou aplicativo WhatsApp <strong>não constitui nem estabelece uma relação advogado-cliente</strong>. A representação jurídica formal do escritório depende de:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-primary/80">
                <li>Avaliação prévia e análise da viabilidade jurídica do caso pelo advogado;</li>
                <li>Celebração formal de Contrato de Honorários e Prestação de Serviços Advocatícios;</li>
                <li>Outorga formal de Instrumento de Procuração judicial ou extrajudicial.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-dark">
                3. Dos Direitos Autorais
              </h3>
              <p className="indent-6">
                Todo o conteúdo deste site, incluindo, sem limitação, marcas, logotipos, elementos visuais, textos, fotografias, ícones, códigos-fonte e design, é de titularidade exclusiva de EVAIR FRANCISCO BONA SOCIEDADE INDIVIDUAL DE ADVOCACIA ou utilizado sob regular licença ou autorização.
              </p>
              <p className="indent-6">
                É expressamente proibida a reprodução, cópia, distribuição, modificação, engenharia reversa ou qualquer exploração comercial, total ou parcial, de qualquer material do site sem o prévio e expresso consentimento por escrito do titular.
              </p>
            </div>
          </section>
        </div>

        {/* Rodapé Interno do Documento */}
        <div className="mt-10 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-dark font-semibold text-sm border-b-2 border-accent pb-1 hover:text-accent hover:scale-105 transition-all duration-300 origin-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar à página principal</span>
          </a>
        </div>
      </main>

      {/* ─── FOOTER INSTITUCIONAL ─── */}
      <footer className="bg-dark-deep text-background px-6 sm:px-8 md:px-16 py-8 rounded-t-[2.5rem] w-full border-t border-background/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-col gap-1.5">
            <p className="text-background/50 font-mono text-xs">
              © 2026 EFB Advocacia. CNPJ nº 29.986.366/0001-63 • OAB/SC nº 009562. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5547991700140"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/30 hover:text-accent transition-colors w-fit font-mono text-xs"
            >
              Desenvolvido por LP Web Studio
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.oab.org.br/publicacoes/AbrirPDF?LivroId=0000004085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
            >
              Código de Ética OAB
            </a>
            <a
              href="https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
            >
              Provimento nº 205/2021 da OAB
            </a>
            <a
              href="https://oab-sc.org.br/honorarios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
            >
              Tabela de Honorários OAB/SC
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
