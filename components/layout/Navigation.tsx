import Link from 'next/link';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
          </svg>
          Landing Builder
        </Link>
        <div className={styles.links}>
          <Link href="/landing/page-1" className={styles.link}>
            Business Solutions
          </Link>
          <Link href="/landing/page-2" className={styles.link}>
            Creative Design
          </Link>
          <Link href="/landing/page-3" className={styles.link}>
            Technology Hub
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
          <Link href="/contentful-app" className={styles.link}>
            Editor
          </Link>
          <Link href="/login" className={styles.link}>
            Log In
          </Link>
          <Link href="/signup" className={`${styles.link} ${styles.signupButton}`}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}