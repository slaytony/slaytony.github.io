import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const CodeBlock = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={nightOwl}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
