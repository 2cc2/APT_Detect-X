// 'use client'
import { Theme } from '../../node_modules/@primer/components/lib/ThemeProvider';
import { Jupyter, Cell } from '@datalayer/jupyter-react';

type CellComponentProps = {
  colorMode: 'light' | 'dark';
  theme: Theme;
}

export const CellComponent = (props: CellComponentProps) => {
  const { colorMode, theme } = props;
  return (
    <>
      <div style={{fontSize: 20}}>Jupyter Cell in Next.js</div>
      <Jupyter
        jupyterServerHttpUrl="https://oss.datalayer.run/api/jupyter-server"
        jupyterServerWsUrl="wss://oss.datalayer.run/api/jupyter-server"
        jupyterToken="d41683474efda7dde9698075e1183f50fdd0bbad3c0a3314"
        colorMode={colorMode}
        theme={theme}
      >
        <Cell/>
    </Jupyter>
  </>
  )
}

export default CellComponent;
