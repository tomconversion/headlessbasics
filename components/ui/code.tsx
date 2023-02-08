import React from "react";

function ExampleCode({ children }) {
  return (
    <pre className="example-code">
      <code>{children}</code>
    </pre>
  );
}

export default ExampleCode;