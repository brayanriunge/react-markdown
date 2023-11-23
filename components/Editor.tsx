import { Editable, useEditor } from "@wysimark/react";
import { useState } from "react";

export default function Editor() {
  const [markdown, setMarkdown] = useState("hello there");
  const editor = useEditor({});
  return <Editable editor={editor} value={markdown} onChange={setMarkdown} />;
}
