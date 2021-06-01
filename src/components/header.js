import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-20 text-center">
      <Link href="/">
        <a className="">
          <h1 className="text-2xl tracking-wide font-black text-gray-700">
            weather <span class="text-pink-500">alpha</span>
          </h1>
        </a>
      </Link>
    </header>
  );
}
