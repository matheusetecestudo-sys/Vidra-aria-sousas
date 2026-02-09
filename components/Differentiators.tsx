import React from 'react';

const Differentiators: React.FC = () => {
    const diffs = [
        {
            title: "Garantia Estendida",
            description: "Segurança total com até 5 anos de garantia em componentes e 12 meses em vedações técnica.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.066 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.066 3.42 3.42 0 012.743 2.742 3.42 3.42 0 002.066 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-2.066 1.946 3.42 3.42 0 01-2.743 2.743 3.42 3.42 0 00-1.946 2.066 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.066 3.42 3.42 0 01-2.743-2.743 3.42 3.42 0 00-2.066-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 002.066-1.946 3.42 3.42 0 012.743-2.742z" /></svg>
            )
        },
        {
            title: "Prazo Recorde",
            description: "Logística própria que garante a instalação de box e espelhos em até 5 dias úteis.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2.05v2.022c4.14.427 7.39 3.677 7.82 7.818h2.022c-.444-5.266-4.572-9.394-9.842-9.84z" /></svg>
            )
        },
        {
            title: "Vidros Certificados",
            description: "Trabalhamos apenas com vidros temperados e laminados que excedem as normas NBR 7199.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            )
        },
        {
            title: "Suporte Pós-Venda",
            description: "Canal exclusivo para ajustes e manutenção, com atendimento técnico em até 24h úteis.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            )
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="container-precision text-center">
                <header className="mb-6 md:mb-20 reveal active max-w-2xl mx-auto">

                    <h2 className="text-4xl md:text-6xl font-black !text-brand-primary mb-8 tracking-tight leading-tight">
                        Por que escolher <br />
                        <span className="text-brand-accent font-medium italic">a nossa engenharia?</span>
                    </h2>
                    <p className="text-lg md:text-xl !text-black font-medium leading-relaxed max-w-xl mx-auto">
                        Combinamos a precisão técnica da ABNT com um atendimento focado na sua paz de espírito.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {diffs.map((d, i) => (
                        <div
                            key={i}
                            className="reveal active group flex flex-col items-center bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-accent/20 hover:shadow-2xl transition-all duration-500"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="w-20 h-20 bg-brand-primary/5 rounded-3xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                {d.icon}
                            </div>
                            <h3 className="text-xl font-bold !text-brand-primary mb-4 tracking-tight">{d.title}</h3>
                            <p className="!text-black font-medium leading-relaxed text-sm md:text-base">
                                {d.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
