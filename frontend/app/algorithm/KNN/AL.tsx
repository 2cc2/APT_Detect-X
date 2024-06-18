import { Tabs, Switch } from 'antd';
import React, { useEffect, useState, useCallback } from 'react';
import Markdown from '../../../components/markdown/Markdown';

import { theme as primerTheme, Text, ToggleSwitch, Box } from '@primer/react';
// import { Theme } from '@primer/react/lib/ThemeProvider';
import { Theme } from '../../../node_modules/@primer/components/lib/ThemeProvider';
import { ColorMode } from '@datalayer/jupyter-react/lib/jupyter/lab/JupyterLabColorMode';
import { jupyterTheme } from '@datalayer/jupyter-react/lib/jupyter/theme';
import dynamic from 'next/dynamic';
import { useTheme, ThemeProvider } from "next-themes";

const { TabPane } = Tabs;

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

const NotebookComponentNoSSR = dynamic(
    () => import('../../../components/jupyter/NotebookComponent'),
    { ssr: false }
);

const CellComponentNoSSR = dynamic(
    () => import('../../../components/jupyter/CellComponent'),
    { ssr: false }
);

const JupyterDemo = () => {
    const [theme, setTheme] = useState<Theme>(primerTheme); // 使用primerTheme作为初始主题
    return (
        <>
            <NotebookComponentNoSSR colorMode={'light'} theme={theme} />
            <CellComponentNoSSR colorMode={'light'} theme={theme} />
        </>
    )
}

export const KNN_AL = () => {
    return (
        <Code/>
    );
};
