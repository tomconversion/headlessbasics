import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-json.min.js"; // add this line to import the json grammar

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



interface Props {
  language: string;
  children: string;
}

class ExampleCodeJSON extends React.Component<Props> {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { language, children } = this.props;
    const jsonString = JSON.stringify(children, null, 4);
    const formattedCode = Prism.highlight(jsonString, Prism.languages[language], language);

    return (
      <pre className="example-code">
        <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: formattedCode }} />
      </pre>
    );
  }
}

export {ExampleCodeJSON};
