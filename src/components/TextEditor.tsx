import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Button from './Button';

const TextEditor = () => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-editor-container">
            <h3 className="font-medium">Description</h3>
            <div className="py-2 px-3 min-h-10">
                {isOpen ? (
                    <>
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            placeholder="Введите текст..."
                            className="border-2 border-[#758496] focus:border-[#679BFD] rounded-sm bg-[#23272B] text-[#b7c2cf]"
                        />
                        <Button className="ml-1" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <div
                        className="bg-[#3C444C] hover:bg-[#46505A] transition-colors px-2 py-3 text-sm font-medium rounded cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        {value || 'Add your description here...'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextEditor;
