import Link from "next/link";

import MenuIcon from "@/assets/icons/menu.svg";

export default function Header() {
  return (
    <header className="text-byellow">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-12 lg:px-20 lg:py-6">
        <h1 className="text-3xl font-bold">
          <Link href="/">Collers</Link>
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-4 font-medium">
            <li className="px-2 py-3">
              <Link
                href=""
                scroll={false}
                className="rounded hover:text-bdarkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Products
              </Link>
            </li>
            <li className="px-2 py-3">
              <Link
                href=""
                scroll={false}
                className="rounded hover:text-bdarkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Solutions
              </Link>
            </li>
            <li className="px-2 py-3">
              <Link
                href=""
                scroll={false}
                className="rounded hover:text-bdarkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Pricing
              </Link>
            </li>
            <li className="px-2 py-3">
              <Link
                href=""
                scroll={false}
                className="rounded hover:text-bdarkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Resources
              </Link>
            </li>
            <li className="px-2 py-3">
              <Link
                href=""
                scroll={false}
                className="rounded hover:text-bdarkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href=""
                scroll={false}
                className="rounded-lg border-2 border-byellow px-7 py-3 hover:bg-byellow hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow active:border-bdarkyellow active:bg-bdarkyellow"
              >
                Sign up now
              </Link>
            </li>
          </ul>
        </nav>
        <button aria-label="Mobile menu" className="block lg:hidden">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
