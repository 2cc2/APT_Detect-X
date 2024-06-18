import React, { useEffect, useState } from 'react';
import Markdown from '../../components/markdown/Markdown';

export const Default = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/DataFusion/introduce.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div>
            <Markdown content={markdown} />
        </div>
    );
};