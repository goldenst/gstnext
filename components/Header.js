import Link from 'next/link'
import styles from "../styles/Header.module.css";

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <Link href='/'>
  <a>Golden State Towing</a>
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link href='/liensale'>
            <a>Lien Sales</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>;
}
