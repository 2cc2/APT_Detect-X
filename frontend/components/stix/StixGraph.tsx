import React, { useEffect } from 'react';
import Head from 'next/head';
import './application.css';

const IndexComponent = () => {
    useEffect(() => {
        const loadScript = (src: string, onLoad: () => void) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = onLoad;
            document.head.appendChild(script);
        };

        loadScript('require.js', () => {
            (window as any).require(['application'], (application: any) => {
                // application.js 加载完成后的回调
                console.log('application loaded', application);
            });
        });
    }, []);

    return (
        <>
            <Head>
                <title>STIX Viewer</title>
                <meta charSet="utf-8" />
                <link rel="stylesheet" type="text/css" href="application.css" />
            </Head>
            <div id="top-header-bar">
                <h1>
                    <span id="header">Data Analysis</span>
                    <span id="chosen-files"></span>
                </h1>
                {/* <a href="https://github.com/oasis-open/cti-stix-visualization/">
                    <img src="GitHub-Mark-64px.png" alt="View source on GitHub" width="32" height="32" />
                </a> */}
            </div>
            <div id="uploader">
                {/* <p>Drop some STIX 2.x here!</p> */}
                <input type="file" id="files" name="files" /><br />
                {/* <p>-- OR --</p> */}
                <p>Fetch some STIX 2.x from this URL!</p>
                <input type="text" id="url" name="url" placeholder="Paste URL here" /><br />
                <button id="fetch-url">Fetch</button>
                {/* <p>-- OR --</p> */}
                <p>Paste some STIX 2.x here!</p>
                <textarea id="paste-area-stix-json" name="pasted" placeholder="Copy/Paste JSON data here..." ></textarea><br />
                <button id="paste-parser">Parse</button>
                <br />
                {/* <p>-- Configuration --</p> */}
                <div
                    id="paste-area-custom-config"
                // name="pasted"
                // placeholder={`Copy/Paste, in JSON format, (if you want to specify this) your custom config for the graph as such: \n{\n"<objectType>": \n\t{\n\t\t"displayProperty": <nameOfProperty>, \n\t\t"displayIcon": <nameOfIconFile>,\n\t\t"embeddedRelationships": [...relationships...]\n\t},\n"userLabels":\n\t{\n\t\t"<STIX ID>": "a label",\n\t\t...\n\t},\n"include": <STIX object filter criteria>,\n"exclude": <STIX object filter criteria>\n}\n\n"<objectType>" lets you customize labels per-type; "userLabels" lets you customize labels per-ID.  For type-specific customization, please note that the above properties are the only currently-supported properties, and at least 1 of them has to be specified.  ID-specific label customization will take priority over type-specific labels.\n\nEach relationship in the "embeddedRelationships" list is a ["<property path>", "<edge label>", <edge direction boolean>] triple.  The property path should refer to a _ref(s) property somewhere within objects of that type.`}
                ></div>
            </div>
            <div id="canvas-container" className="hidden" >
                <div id="canvas-wrapper">
                    <div id="canvas" ></div>
                </div>
                <div className="highlight-box">
                    <div id="selected" className="sidebar">
                        <h2>Selected Node</h2>
                        <div id="selection"></div>
                    </div>
                    <div id="connections" className="sidebar">
                        <h2>Linked Nodes</h2>
                        <h3>Incoming Edges:</h3>
                        <div id="connections-incoming"></div>
                        <h3>Outgoing Edges:</h3>
                        <div id="connections-outgoing"></div>
                    </div>
                </div>
                <div id="legend" className="sidebar">
                    <table id="legend-content">
                        <caption>
                            <h2>Legend</h2>
                        </caption>
                    </table>
                </div>
            </div>
        </>
    );
};

export default IndexComponent;