import ChapterTitle from "@/components/ChapterTitle";
import Tiptap from "@/components/Tiptap";

import { Inter, Literata } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const literata = Literata({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="mt-[10rem] mb-[3rem]">
        <ChapterTitle />
      </div>
      <Tiptap />
    </>
  );
}
