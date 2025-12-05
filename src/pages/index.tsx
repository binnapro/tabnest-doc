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
    <div className="feature-card" style={{flex: '1 1 calc(33.333% - 20px)', minWidth: '200px', textAlign: 'center', margin: '10px'}}>
      <div style={{fontSize: '48px', marginBottom: '15px', display: 'inline-block'}}>{icon}</div>
      <h3 style={{marginTop: '15px', marginBottom: '10px', color: 'var(--ifm-color-primary-dark)'}}>{title}</h3>
      <p style={{color: '#666', lineHeight: '1.6'}}>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section style={{padding: '80px 20px', backgroundColor: 'var(--ifm-background-surface-secondary)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold'}}>Why TabNest?</h2>
        <p style={{textAlign: 'center', marginBottom: '50px', color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px'}}>
          Everything you need to organize and manage your browser tabs efficiently
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0', marginLeft: '-10px', marginRight: '-10px'}}>
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
    <section style={{padding: '80px 20px'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold'}}>Perfect For</h2>
        <p style={{textAlign: 'center', marginBottom: '50px', color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px'}}>
          TabNest is designed for professionals who manage multiple projects and contexts
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
          <div className="use-case-card">
            <h3>👨‍💻 Developers</h3>
            <p>Organize docs, APIs, frameworks, and tools for each project</p>
          </div>
          <div className="use-case-card">
            <h3>🔬 Researchers</h3>
            <p>Keep research materials, papers, and references organized</p>
          </div>
          <div className="use-case-card">
            <h3>📊 Product Managers</h3>
            <p>Track competitors, requirements, and market research</p>
          </div>
          <div className="use-case-card">
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
    <section style={{padding: '80px 20px', backgroundColor: 'var(--ifm-background-surface-secondary)', textAlign: 'center'}}>
      <div className="container">
        <h2 style={{fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold', marginBottom: '20px'}}>Ready to Organize Your Tabs?</h2>
        <p style={{fontSize: '1.1rem', marginBottom: '40px', color: '#666', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6'}}>
          TabNest is free and open-source. Works perfectly with Chrome, Edge, Brave, and all Chromium-based browsers.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px'}}>
          <Link className="button button--primary button--lg" to="/docs/guide/getting-started">
            🚀 Get Started Now
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/guide/installation">
            📦 Installation Guide
          </Link>
        </div>
        <p style={{color: '#999', fontSize: '0.9rem'}}>
          Have questions? Check our <Link to="/docs/04-faq/faq">FAQ</Link> or visit <a href="https://github.com/oayzz/tabnest" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
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
