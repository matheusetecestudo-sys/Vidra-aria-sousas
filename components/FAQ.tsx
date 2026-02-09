import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-8 md:py-10 bg-white font-inter">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal active">
          <h2 className="text-4xl md:text-5xl font-black !text-brand-primary mb-8 tracking-tight leading-[1.1]">
            Suporte e <br />
            <span className="text-brand-accent font-medium italic">Esclarecimentos.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="reveal active bg-white rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex flex-col items-center justify-center p-4 md:p-10 text-center group relative"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-brand-primary' : 'text-slate-900 group-hover:text-brand-primary'}`}>
                  {item.question}
                </span>
                <div className={`mt-6 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-primary text-white rotate-180 shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="p-4 md:p-10 pt-0 text-black text-lg font-medium leading-relaxed border-t border-slate-50/50 text-center">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
