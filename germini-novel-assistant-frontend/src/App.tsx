import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAuth from './components/UserAuth';
import IdeaGenerator from './components/IdeaGenerator';
import WritingAssistant from './components/WritingAssistant';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import './styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Welcome to Germini Novel Assistant</h1>} />
                    <Route path="/idea-generator" element={<IdeaGenerator />} />
                    <Route path="/writing-assistant" element={<WritingAssistant />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/auth" element={<UserAuth />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
