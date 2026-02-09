import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {


    // Unified logo for both header and footer
    return (
        <img
            src="/images/Gemini_Generated_Image_fqysfnfqysfnfqys-removebg-preview.png"
            alt="Vidraçaria Sousas"
            className={`${className} object-contain`}
        />
    );
};

export default Logo;
