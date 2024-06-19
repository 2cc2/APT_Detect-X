// 'use client'
import { Jupyter, Notebook, CellSidebar } from '@datalayer/jupyter-react';
import { NotebookToolbar } from '@datalayer/jupyter-react/lib/examples/toolbars/NotebookToolbar';
// import { Theme } from '@primer/react/lib/ThemeProvider';
import { Theme } from '../../node_modules/@primer/components/lib/ThemeProvider';

type NotebookComponentProps = {
  colorMode: 'light' | 'dark';
  theme: Theme;
}



export const NotebookComponent = (props: NotebookComponentProps) => {
  const { colorMode, theme } = props;
  return (
    <>
      {/* <div style={{fontSize: 20}}>Jupyter Notebook in Next.js</div> */}
      <Jupyter
        jupyterServerHttpUrl="http://localhost:8888"
        jupyterServerWsUrl="ws://localhost:8888"
        jupyterToken="d41683474efda7dde9698075e1183f50fdd0bbad3c0a3314"
        colorMode={colorMode}
        theme={theme}
      >
        <Notebook
          // path="ipywidgets.ipynb"
          uid="notebook-nextjs-1"
          cellSidebarMargin={120}
          CellSidebar={CellSidebar}
          Toolbar={NotebookToolbar}
        />
    </Jupyter>
  </>
  )
}

export default NotebookComponent;