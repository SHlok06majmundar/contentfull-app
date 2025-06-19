import { Navigation } from '../components/layout/Navigation';
import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Landing Page Builder</h1>
            <p className={styles.subtitle}>
              Create beautiful, responsive landing pages with our drag-and-drop interface.
              Build once, deploy everywhere with Contentful integration.
            </p>
            <div className={styles.links}>
              <Link href="/contentful-app" className={styles.primaryLink}>
                Open Editor
              </Link>
              <Link href="/landing/page-1" className={styles.secondaryLink}>
                View Examples
              </Link>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span>Drag & Drop Interface</span>
              </div>
              <div className={styles.feature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span>Contentful Integration</span>
              </div>
              <div className={styles.feature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
                <span>Next.js Performance</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}