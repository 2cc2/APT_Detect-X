import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';

export const Code = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/LR/AL_code.md')
            .then(response => response.text())
            .then(data => {
                setMarkdown(data);
            });
    }, []);

    return (
        <div >
            <Markdown content={markdown} />
        </div>
    );
};

export const LR_AL = () => {
    return (
            <Code />
    );
};
