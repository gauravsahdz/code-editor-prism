import React, { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "../styles/_codeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    preRef.current.scrollTop = textareaRef.current.scrollTop;
    preRef.current.scrollLeft = textareaRef.current.scrollLeft;
  }, [code]);

  const handleScroll = () => {
    preRef.current.scrollTop = textareaRef.current.scrollTop;
    preRef.current.scrollLeft = textareaRef.current.scrollLeft;
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor">
        <pre ref={preRef} aria-hidden="true">
          <code
            className="language-js"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                code,
                Prism.languages.javascript,
                "javascript"
              ),
            }}
          />
        </pre>
        <textarea
          ref={textareaRef}
          className="code-input"
          value={code}
          onChange={handleCodeChange}
          onScroll={handleScroll}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
