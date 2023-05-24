import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Arjay Beltran</p>
      <ul>
        <li>
          <Link href="https://github.com/Arjybltrn">GitHub</Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/arjaybeltran">LinkedIn</Link>
        </li>
      </ul>
    </footer>
  );
}
