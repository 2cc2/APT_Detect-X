import React, { useEffect, useState } from 'react';
import Markdown from '../../../components/markdown/Markdown';

export const Code = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/algorithm-kdd/KNN/AL_code.md')
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


export const KNN_AL = () => {
    return (
        <Code/>
    );
};
