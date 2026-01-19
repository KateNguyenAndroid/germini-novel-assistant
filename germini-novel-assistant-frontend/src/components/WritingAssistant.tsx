import React, { useState } from 'react';

const WritingAssistant: React.FC = () => {
    const [text, setText] = useState('');
    const [checkedText, setCheckedText] = useState('');

    const handleCheckGrammar = () => {
        // Mock grammar check
        const checked = text.replace(/(\w+)\s+(\w+)/g, "$1 $2 (Checked)");
        setCheckedText(checked);
    };

    return (
        <div className="writing-assistant-container">
            <h2>Writing Assistant</h2>
            <textarea
                placeholder="Write your content here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleCheckGrammar}>Check Grammar</button>
            <h3>Checked Content:</h3>
            <pre>{checkedText}</pre>
        </div>
    );
};

export default WritingAssistant;
