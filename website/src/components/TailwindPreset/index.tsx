import React from 'react';
import CodeBlock from "@theme/CodeBlock";
import preset from "../../../../dist/tailwind/index.js";

export default function TailwindPreset(): JSX.Element {
  return (
    <div>
      <CodeBlock language="js">
        { JSON.stringify(preset, null, 2) }
      </CodeBlock>
    </div>
  );
}
