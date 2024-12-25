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

const ChapterTitle = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Enter Title",
      }),
    ],
  });

  return <EditorContent className={`${literata.className} container font-bold text-2xl`} editor={editor} />;
};

export default ChapterTitle;
