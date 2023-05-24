import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/bio">BIO</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/resume">RESUME</Link>
        </li>
      </ul>
    </nav>
  );
}
