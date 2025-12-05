import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guide/getting-started">
            🚀 Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/features/overview">
            ✨ Features
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({icon, title, description}) {
  return (
    <div style={{flex: 1, minWidth: '200px', textAlign: 'center', padding: '20px'}}>
      <div style={{fontSize: '48px', marginBottom: '10px'}}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section style={{padding: '60px 20px', backgroundColor: 'var(--ifm-background-surface-secondary)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Why TabNest?</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
          <FeatureCard
            icon="🗂️"
            title="Organize Spaces"
            description="Create multiple workspaces for different projects and contexts"
          />
          <FeatureCard
            icon="🤖"
            title="AI Powered"
            description="Automatically categorize tabs with AI intelligence"
          />
          <FeatureCard
            icon="☁️"
            title="Cloud Sync"
            description="Backup to GitHub Gist or WebDAV for peace of mind"
          />
          <FeatureCard
            icon="🔍"
            title="Global Search"
            description="Find any tab instantly across all your spaces"
          />
          <FeatureCard
            icon="🎨"
            title="Beautiful Design"
            description="Dark mode, light mode, and system theme support"
          />
          <FeatureCard
            icon="🌍"
            title="Multi-language"
            description="Available in English and Simplified Chinese"
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseSection() {
  return (
    <section style={{padding: '60px 20px'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Perfect For</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
          <div style={{padding: '20px', borderLeft: '4px solid var(--ifm-color-primary)'}}>
            <h3>👨‍💻 Developers</h3>
            <p>Organize docs, APIs, frameworks, and tools for each project</p>
          </div>
          <div style={{padding: '20px', borderLeft: '4px solid var(--ifm-color-primary)'}}>
            <h3>🔬 Researchers</h3>
            <p>Keep research materials, papers, and references organized</p>
          </div>
          <div style={{padding: '20px', borderLeft: '4px solid var(--ifm-color-primary)'}}>
            <h3>📊 Product Managers</h3>
            <p>Track competitors, requirements, and market research</p>
          </div>
          <div style={{padding: '20px', borderLeft: '4px solid var(--ifm-color-primary)'}}>
            <h3>🎓 Students</h3>
            <p>Organize course materials, assignments, and resources</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{padding: '60px 20px', backgroundColor: 'var(--ifm-background-surface-secondary)', textAlign: 'center'}}>
      <div className="container">
        <h2>Ready to Organize Your Tabs?</h2>
        <p style={{fontSize: '18px', marginBottom: '30px'}}>
          TabNest is free and works with Chrome and Chromium-based browsers
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/docs/guide/getting-started">
            Get Started Now
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/guide/installation">
            Installation Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <UseCaseSection />
        <CTASection />
      </main>
    </Layout>
  );
}
