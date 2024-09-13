import { useState } from 'react';
import PopUp from './PopUp';
import CommentEditor from './TextEditor';

const Card = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('Планирование проекта');

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="bg-[#22272B] rounded-md mt-2 px-2 py-2 max-h-9 drop-shadow-md shadow-md cursor-pointer border-2 border-transparent hover:border-stone-400 hover:transition-colors text-sm"
            >
                {name}
            </div>
            <PopUp isOpen={isOpen} setIsOpen={setIsOpen} className="py-2 pl-14 pr-[52px] w-[768px]">
                <h3 className="font-medium">{name}</h3>
                <p className="px-3 py-2">
                    In column <span className="underline cursor-pointer">{name}</span>
                </p>
                <CommentEditor />
            </PopUp>
        </>
    );
};

export default Card;
