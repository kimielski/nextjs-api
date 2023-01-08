import Link from "next/link";

export default function Navigation() {
  return (
    <ul id="nav">
      <li>
        <Link href="/countries" key="Countries">
          Countries
        </Link>
      </li>
    </ul>
  );
}
