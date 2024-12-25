"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { Inter, Literata } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const literata = Literata({
  subsets: ["latin"],
  display: "swap",
});

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
    ],
  });

  return <EditorContent className={`${literata.className} container font-medium`} editor={editor} />;
};

export default Tiptap;
