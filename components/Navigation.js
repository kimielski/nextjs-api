import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="sm:flex sm:justify-between">
          <div className="flex flex-row">
            <ul className="navbar bg-white sm:bg-transparent w-full hidden text-center sm:text-left sm:flex sm:flex-row text-gray-900 text-sm items-center font-bold">
              <li className="relative hover:text-black">
                <Link
                  href="/"
                  key="Countries"
                  className="active block py-3 lg:py-7 px-6"
                >
                  Home
                </Link>
              </li>
              <li className="relative hover:text-black">
                <Link
                  href="/countries"
                  key="Countries"
                  className="block py-3 lg:py-7 px-6"
                >
                  Countries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
