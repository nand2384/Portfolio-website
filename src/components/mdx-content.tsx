"use client";

import { useMemo, type ComponentType } from "react";
import * as runtime from "react/jsx-runtime";

function compileMDXComponent(code: string): ComponentType {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMemo(() => compileMDXComponent(code), [code]);
  return (
    <div className="mdx-content">
      {/* eslint-disable-next-line react-hooks/static-components -- MDX bodies are compiled to a component at runtime by design; identity is stabilized by the useMemo above */}
      <Component />
    </div>
  );
}
