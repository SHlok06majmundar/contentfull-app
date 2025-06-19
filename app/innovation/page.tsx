'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '../../components/layout/Navigation';
import styles from './page.module.css';

export default function InnovationPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&h=1080&fit=crop"
            alt="Innovation Hero Background"
            className={styles.heroBackground}
            width={1920}
            height={1080}
            priority
          />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Innovation Hub</h1>
            <p className={styles.subtitle}>
              Explore the cutting-edge technologies and innovative solutions that are
              shaping the future. Join us in building a better tomorrow with advanced
              tools and expert guidance.
            </p>
          </div>
        </section>

        <div className={styles.container}>
          {/* Innovation Areas Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Innovation Areas</h2>            <p className={styles.sectionSubtitle}>
              Discover the revolutionary technologies and methodologies we&apos;re exploring
              to solve today&apos;s most complex challenges.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v6.5l3-3"></path>
                    <path d="M12 2v6.5l-3-3"></path>
                    <path d="M6 8l3 3-3 3"></path>
                    <path d="M18 8l-3 3 3 3"></path>
                    <path d="M12 22v-6.5l3 3"></path>
                    <path d="M12 22v-6.5l-3 3"></path>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Artificial Intelligence</h3>
                <p className={styles.cardContent}>
                  Leveraging machine learning, natural language processing, and neural
                  networks to develop intelligent systems that learn, adapt, and solve
                  complex problems.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <path d="M6 6h.01"></path>
                    <path d="M6 18h.01"></path>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Blockchain Technology</h3>
                <p className={styles.cardContent}>
                  Creating secure, transparent, and decentralized solutions for data
                  management, financial transactions, and supply chain tracking.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
                    <path d="M21 12H3"></path>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Internet of Things</h3>
                <p className={styles.cardContent}>
                  Connecting devices and systems to collect and exchange data,
                  enabling smart homes, cities, and industrial applications.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Innovation Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Innovation</h2>
            <p className={styles.sectionSubtitle}>
              Our flagship technology solution combines AI, cloud computing, and advanced
              analytics to deliver unprecedented results.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Real-time Data Processing</h4>
                  <p className={styles.featureDescription}>
                    Process millions of data points instantly, enabling immediate
                    insights and responsive decision-making.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Predictive Analytics</h4>
                  <p className={styles.featureDescription}>
                    Forecast trends and anticipate issues before they occur with
                    our advanced prediction algorithms.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Scalable Architecture</h4>
                  <p className={styles.featureDescription}>
                    Grow seamlessly from startup to enterprise with our
                    infinitely scalable cloud infrastructure.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Security-First Design</h4>
                  <p className={styles.featureDescription}>
                    Protect your data and systems with our military-grade
                    security protocols and encryption.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Innovate?</h2>
            <p className={styles.ctaText}>
              Join our innovation ecosystem and get access to cutting-edge tools,
              expert guidance, and a community of forward-thinking creators.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Started
              </Link>
              <Link href="/landing/page-3" className={styles.secondaryButton}>
                Learn More
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
