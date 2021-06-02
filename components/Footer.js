import styles from "../styles/Footer.module.css"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2021 Golden State Towing</p>
      <p>
        <Link href='/about'>
        <a>About</a>
      </Link>
      </p>
      
    </footer>
  );
}
