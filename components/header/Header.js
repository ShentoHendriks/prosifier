import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between p-4">
      <Link href="/">Prosifier</Link>
      <nav className="flex gap-6 items-center">
        <Link href="/">About</Link>
        <Link href="/">Our pricing</Link>
        <Link className="bg-blue-500 px-2 py-2 rounded-full" href="/">
          Get started
        </Link>
      </nav>
    </header>
  );
}
