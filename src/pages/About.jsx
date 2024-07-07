import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function About() {
    const [content, setContent] = useState("");

    useEffect(() => {
        async function getAbout() {
            const response = await fetch("./about.md");
            const text = await response.text();

            setContent(text);
        }

        getAbout();
    })

    return <div className="content">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
}