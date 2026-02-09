import React from 'react';
import { getWhatsAppLink, WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-8 md:pt-40 md:pb-24 bg-white overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

      <div className="container-precision relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-16 md:gap-24 items-center">

          <div className="lg:col-span-12 reveal active text-center flex flex-col items-center">


            <h1 className="text-3xl md:text-7xl lg:text-[92px] font-black !text-brand-primary leading-[1.1] md:leading-[0.85] mb-6 md:mb-8 tracking-tight text-center">
              A Engenharia do <br className="hidden md:block" />
              <span className="text-brand-accent font-medium italic whitespace-nowrap">Vidro Moderno.</span>
            </h1>

            <p className="text-lg md:text-2xl !text-black font-medium leading-relaxed max-w-2xl mb-10 md:mb-10 md:mb-16 mx-auto text-center">
              Projetos sob medida em vidros e espelhos com instalação técnica imediata e acabamento padrão arquitetura de alto luxo.
            </p>

            <div className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
              <a
                href={getWhatsAppLink("Início", "Botão CTA Principal")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center gap-4 px-8 sm:px-12 bg-brand-primary text-white rounded-[2rem] font-black text-xl btn-interact shadow-2xl shadow-brand-primary/30 whitespace-nowrap"
              >
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar orçamento
              </a>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&h=128&auto=format&fit=crop&fm=webp"
                  ].map((url, i) => (
                    <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[6px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm relative z-[30]">
                      <img src={url} alt={`Cliente ${i + 1}`} className="w-full h-full object-cover" decoding="async" loading="eager" fetchPriority="high" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight text-center">
                  <p className="text-base md:text-xl font-black text-slate-900 leading-none">4.500+</p>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-900 uppercase tracking-widest leading-none mt-1">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-8 md:py-12 border-t border-slate-200/60 w-full max-w-4xl lg:mx-auto">
              {[
                { v: "20+", l: "Anos de Mercado" },
                { v: "48h", l: "Prazo Recorde" },
                { v: "SP/REG", l: "Cobertura Total" },
                { v: "100%", l: "Precisão Técnica" }
              ].map((item, i) => (
                <div key={i} className="space-y-3 text-center">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none tracking-tighter">{item.v}</p>
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest leading-none">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;