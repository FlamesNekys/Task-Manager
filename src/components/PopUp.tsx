import { FC, MouseEvent, ReactNode } from 'react';

interface IPopUp {
    isOpen: boolean;
    setIsOpen: (bool: boolean) => void;
    children: ReactNode;
    className: string | undefined;
}

const PopUp: FC<IPopUp> = ({ isOpen, setIsOpen, children, className }) => {
    if (!isOpen) return null;

    const onContainerClick = () => {
        setIsOpen(false);
    };

    const onPopupClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div
            className="h-screen w-screen flex fixed inset-0 box-border justify-center items-center z-50 bg-black/50 backdrop-blur-sm"
            onClick={onContainerClick}
        >
            <div onClick={onPopupClick} className={`min-h-[600px] rounded-lg bg-[#333940] ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default PopUp;
