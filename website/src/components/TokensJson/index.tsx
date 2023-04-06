import React from 'react';
import CodeBlock from "@theme/CodeBlock";
import tokens from "../../../../dist/tokens.json";

export default function TokensJson(): JSX.Element {
  return (
    <div>
      <CodeBlock language="json">
        { JSON.stringify(tokens, null, 2) }
      </CodeBlock>
    </div>
  );
}
