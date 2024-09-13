import { useState } from 'react';
import Card from './Card';
import Button from './Button';

const List = () => {
    const [header, setHeader] = useState('Нужно сделать');

    return (
        <li className="bg-[#101204] rounded-2xl w-64 flex-shrink-0 px-2 py-2">
            <input
                className={`px-2 py-1 rounded bg-transparent max-w-max cursor-pointer focus:border-gray-300 focus:cursor-text transition-colors focus:bg-[#23272B] text-base`}
                value={header}
                onChange={({ target }) => setHeader(target.value)}
                onKeyDown={(ev) => ev.key === 'Enter' && ev.currentTarget.blur()}
            />
            <Card />
            <Card />
            <Card />
            <Button className="mt-3">+ Add card</Button>
        </li>
    );
};

export default List;
