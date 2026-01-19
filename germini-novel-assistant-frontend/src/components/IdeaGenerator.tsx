import React, { useState } from 'react';
import { generateNovelContent } from '../api';

const IdeaGenerator: React.FC = () => {
    const [idea, setIdea] = useState('');
    const [language, setLanguage] = useState('English');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateIdea = async () => {
        setLoading(true);
        const generatedContent = await generateNovelContent(idea, language);
        setContent(generatedContent);
        setLoading(false);
    };

    return (
        <div className="idea-generator-container">
            <h2>Idea Generator</h2>
            <textarea
                placeholder="Enter your idea here..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
            />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="English">English</option>
                <option value="Traditional Chinese">Traditional Chinese</option>
                <option value="Vietnamese">Vietnamese</option>
            </select>
            <button onClick={handleGenerateIdea}>Generate Content</button>
            {loading && <p>Loading...</p>}
            <h3>Generated Content:</h3>
            <pre>{content}</pre>
        </div>
    );
};

export default IdeaGenerator;
