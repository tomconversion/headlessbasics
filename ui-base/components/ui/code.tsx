import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js";

interface Props {
  language: string;
  children: string;
}

class ExampleCode extends React.Component<Props> {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <pre className="example-code">
        <code className={`language-${this.props.language}`}>
          {this.props.children}
        </code>
      </pre>
    );
  }
}

export default ExampleCode;
