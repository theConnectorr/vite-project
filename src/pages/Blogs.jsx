import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/Blogs.css"

export default function Blogs() {
    const [content, setContent] = useState("");

    useEffect(() => {
		async function getBLog(fileName) {
			const response = await fetch(fileName);
			const textContent = await response.text();

			setContent(textContent);
		}

		getBLog("blogs/vi/github101_vi.md");
    }, []);

    // return <div>{content}</div>;
	return <div className="content">
		<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
	</div>;
} 