import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {
    const isFooter = variant === 'footer';

    // Se for o rodapé, usamos a imagem física solicitada
    if (isFooter) {
        return (
            <img
                src="/images/logo sem fundo.png"
                alt="JF Glass Vidraçaria"
                className={`${className} object-contain`}
            />
        );
    }

    // Para o cabeçalho, mantemos a imagem logo.jpg (ou podemos usar o SVG se preferir)
    return (
        <img
            src="/images/logo.jpg"
            alt="JF Glass Vidraçaria"
            className={`${className} object-contain`}
        />
    );
};

export default Logo;
