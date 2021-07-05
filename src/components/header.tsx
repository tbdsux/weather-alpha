import Link from 'next/link';

export default function Header() {
  return (
    <header className="pb-12 text-center">
      <Link href="/">
        <a className="">
          <h1 className="text-2xl tracking-wide font-extrabold text-gray-700">
            weather <span className="text-pink-500">alpha</span>
          </h1>
        </a>
      </Link>
    </header>
  );
}
