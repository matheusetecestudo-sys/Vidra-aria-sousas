import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter overflow-x-hidden">
      <main className="pt-32 md:pt-32">

        {/* --- HERO SECTION --- */}
        <section className="relative pt-8 pb-12 md:pt-24 md:pb-32 bg-slate-50 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="reveal active flex flex-col items-center text-center">


              <h1 className="text-4xl md:text-7xl lg:text-[100px] font-black !text-brand-primary leading-[1] md:leading-[0.85] mb-8 tracking-tight">
                Canais de <br className="hidden md:block" />
                <span className="text-brand-accent font-medium italic whitespace-nowrap">Comunicação.</span>
              </h1>

              <p className="text-lg md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-3xl mb-10 md:mb-16 mx-auto opacity-80">
                Fale diretamente com orçamentistas experientes. Projetos sob medida com acabamento padrão arquitetura de alto luxo.
              </p>

              <a
                href={getWhatsAppLink("Contato", "Hero CTA")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center gap-4 px-8 sm:px-12 bg-brand-primary text-white rounded-[2rem] font-black text-xl btn-interact shadow-2xl shadow-brand-primary/30 whitespace-nowrap"
              >
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Iniciar atendimento agora
              </a>
            </div>
          </div>
        </section>

        {/* --- CONTACT CHANNELS BLOCK --- */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container-precision">
            <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-20 overflow-hidden relative reveal active shadow-3xl">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">

                <h2 className="text-4xl md:text-7xl font-black !text-brand-primary mb-12 leading-[1.05] tracking-tight uppercase">
                  Sede <br className="hidden md:block" />
                  <span className="text-brand-accent font-medium italic lowercase">corporativa.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-white/5 pt-16 w-full items-start">
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <p className="text-[10px] font-bold !text-slate-400 uppercase tracking-[0.2em] leading-tight mb-3">E-mail Corporativo</p>
                    <a href={`mailto:${CLIENT_CONFIG.email}`} className="text-lg md:text-2xl font-black !text-white tracking-tight hover:text-brand-accent transition-colors block">
                      {CLIENT_CONFIG.email}
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-[10px] font-bold !text-slate-400 uppercase tracking-[0.2em] leading-tight mb-3">Horário Operacional</p>
                    <p className="text-lg md:text-2xl font-black !text-white tracking-tight">09:00 - 18:00</p>
                    <p className="text-[10px] font-bold !text-slate-400 uppercase tracking-[0.1em] mt-2">Segunda a Sábado</p>
                  </div>

                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="text-[10px] font-bold !text-slate-400 uppercase tracking-[0.2em] leading-tight mb-3">Localização</p>
                    <p className="text-lg md:text-2xl font-black !text-white tracking-tight uppercase leading-[1.2] max-w-[320px] mx-auto">{CLIENT_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PREPARATION BLOCK --- */}
        <section id="preparacao" className="py-12 md:py-20 bg-white overflow-hidden border-t border-slate-50">
          <div className="container-precision">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center">

              {/* Info Column */}
              <div className="lg:col-span-6 reveal active flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="space-y-8 w-full">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-7xl lg:text-[85px] font-black !text-brand-primary leading-[0.9] tracking-tighter">
                      O que ter <br className="hidden md:block" />
                      <span className="text-brand-accent font-medium italic">em mãos?</span>
                    </h2>
                    <p className="text-xl md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Para um orçamento técnico imediato, forneça as seguintes informações:
                    </p>
                  </div>

                  <div className="space-y-10 pt-4">
                    {[
                      { t: "Medidas Gerais", d: "Largura e altura aproximadas do vão desejado." },
                      { t: "Evidência Visual", d: "Fotos do local facilitam a análise estrutural rápida." },
                      { t: "Configuração", d: "Cor de perfis e ferragens (Inox, Preto, Prata)." }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group text-center sm:text-left">
                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 flex flex-shrink-0 items-center justify-center text-brand-primary font-black text-xl shadow-lg transition-all duration-500 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                          0{i + 1}
                        </div>
                        <div className="pt-2">
                          <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-none">{item.t}</h4>
                          <p className="text-slate-500 font-medium leading-relaxed max-w-sm sm:max-w-none">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Column */}
              <div className="lg:col-span-6 reveal active relative w-full">
                <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-300/50 border-[10px] md:border-[16px] border-white ring-1 ring-slate-200/60 group h-[500px] md:h-[750px] w-full bg-slate-100">
                  <iframe
                    title="Geolocalização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-10"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>

                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-auto md:right-10 bg-white/95 backdrop-blur shadow-2xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 text-slate-900 z-20 md:max-w-xs transition-transform duration-500 group-hover:translate-y--2">
                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-4">Unidade Técnica</p>
                    <p className="text-lg md:text-xl font-black mb-6 leading-tight">Cobertura total em toda Grande SP & Interior.</p>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Atendimento Especializado</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE BLOCK --- */}
        <section className="py-10 md:py-24 bg-white">
          <div className="container-precision">
            <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-24 overflow-hidden relative reveal active shadow-2xl">
              <div className="absolute top-0 left-0 w-[40%] h-full bg-brand-accent/5 skew-x-[15deg] pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">


                <h2 className="text-3xl md:text-7xl font-black !text-brand-primary mb-12 leading-[1.1] tracking-tighter uppercase max-w-4xl">
                  Paz de Espírito <br className="hidden md:block" />
                  <span className="text-brand-accent font-medium italic lowercase">estrutural.</span>
                </h2>

                <p className="!text-slate-200 font-medium text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto px-4">
                  "Garantimos a segurança técnica e o acabamento impecável que seu imóvel merece."
                </p>

                <div className="w-24 h-1 bg-brand-primary rounded-full mb-12 mx-auto"></div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/5 pt-12 w-full">
                  {[
                    { v: "4.500+", l: "Obras efetuadas" },
                    { v: "Capital & ABC", l: "Logística" },
                    { v: "12 meses", l: "Garantia Total" },
                    { v: "Certificado", l: "Padrão NBR" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="text-xl md:text-3xl font-black !text-white mb-1 tracking-tight italic">{stat.v}</div>
                      <div className="text-[9px] font-bold !text-slate-400 uppercase tracking-widest leading-tight">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;
