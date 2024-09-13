import React from 'react';

interface IButton {
    children: React.ReactNode;
    className?: string;
    onClick: React.MouseEventHandler;
}

const Button: React.FC<IButton> = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`hover:bg-[#282F27] rounded transition-colors py-[6px] px-3 ${className}`}>
            {children}
        </button>
    );
};

export default Button;
