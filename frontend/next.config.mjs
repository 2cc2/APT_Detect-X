/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, options) => {
        config.module.rules.push(
            { test: /\.js.map$/, type: 'asset/resource' },
            {
                // In .css files, svg is loaded as a data URI.
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.css$/,
                use: {
                    loader: 'svg-url-loader',
                    options: { encoding: 'none', limit: 10000 },
                },
            },
            {
                // In .ts and .tsx files (both of which compile to .js), svg files
                // must be loaded as a raw string instead of data URIs.
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.js$/,
                type: 'asset/source',
            },
            // Ship the JupyterLite service worker.
            {
                resourceQuery: /text/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            // Rule for pyodide kernel
            {
                test: /pypi\/.*/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/pypi/[name][ext][query]',
                },
            },
            {
                test: /pyodide-kernel-extension\/schema\/.*/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/schema/[name][ext][query]',
                },
            },
            // Rule for .whl files
            {
                test: /\.whl$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/whl/[name][ext]',
                },
            }
        );
        return config;
    },
};

export default nextConfig;
