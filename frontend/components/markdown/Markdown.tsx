import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm'; // 引入 remark-gfm
import "highlight.js/styles/atom-one-dark.css";
import "katex/dist/katex.min.css"; // don't forget to import katex styles
import CopyButton from "./CopyButton";

const Markdown = ({ content }: { content: string }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]} // 使用 remark-gfm
            rehypePlugins={[rehypeHighlight, rehypeKatex]}
            components={{
                pre: ({ children }) => <pre className="not-prose ">{children}</pre>,
                code: ({ children, className, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    if (Array.isArray(children) && match) {
                        const id = Math.random().toString(36).substring(2, 11);
                        return (
                            <div className="not-prose rounded-md border relative">
                                <div className="overflow-x-auto">
                                    <div id={id} className="p-4">
                                        {children}
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 h-12 flex items-center px-4 dark:bg-zinc-900">
                                    <CopyButton id={id} />
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <code
                                {...props}
                                className="not-prose rounded bg-gray-100 px-1 dark:bg-zinc-900"
                            >
                                {children}
                            </code>
                        );
                    }
                },
            }}
            className="prose prose-zinc max-w-none dark:prose-invert "
        >
            {content}
        </ReactMarkdown>
    );
};

export default Markdown;