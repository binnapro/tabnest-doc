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
            🚀 快速开始
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/features/overview">
            ✨ 功能特性
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
        <h2 style={{textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold'}}>为什么选择 TabNest？</h2>
        <p style={{textAlign: 'center', marginBottom: '50px', color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px'}}>
          高效管理和组织浏览器标签页所需的一切功能
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0', marginLeft: '-10px', marginRight: '-10px'}}>
          <FeatureCard
            icon="🗂️"
            title="空间管理"
            description="为不同项目和场景创建多个工作空间"
          />
          <FeatureCard
            icon="🤖"
            title="AI 智能分类"
            description="使用人工智能自动分类整理标签页"
          />
          <FeatureCard
            icon="☁️"
            title="云端同步"
            description="支持 GitHub Gist 或 WebDAV 备份，数据更安全"
          />
          <FeatureCard
            icon="🔍"
            title="全局搜索"
            description="跨所有空间即时查找任意标签页"
          />
          <FeatureCard
            icon="🎨"
            title="精美设计"
            description="支持深色模式、浅色模式和系统主题"
          />
          <FeatureCard
            icon="🌍"
            title="多语言支持"
            description="提供中文和英文界面"
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
        <h2 style={{textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold'}}>适用人群</h2>
        <p style={{textAlign: 'center', marginBottom: '50px', color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px'}}>
          TabNest 专为需要管理多个项目和工作场景的专业人士设计
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
          <div className="use-case-card">
            <h3>👨‍💻 开发者</h3>
            <p>为每个项目整理文档、API、框架和工具</p>
          </div>
          <div className="use-case-card">
            <h3>🔬 研究人员</h3>
            <p>有序管理研究资料、论文和参考文献</p>
          </div>
          <div className="use-case-card">
            <h3>📊 产品经理</h3>
            <p>跟踪竞品、需求和市场调研信息</p>
          </div>
          <div className="use-case-card">
            <h3>🎓 学生</h3>
            <p>整理课程资料、作业和学习资源</p>
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
        <h2 style={{fontSize: '2.5rem', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold', marginBottom: '20px'}}>准备好整理你的标签页了吗？</h2>
        <p style={{fontSize: '1.1rem', marginBottom: '40px', color: '#666', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6'}}>
          TabNest 完全免费且开源，完美支持 Chrome、Edge、Brave 等所有基于 Chromium 的浏览器
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px'}}>
          <Link className="button button--primary button--lg" to="/docs/guide/getting-started">
            🚀 立即开始
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/guide/installation">
            📦 安装指南
          </Link>
        </div>
        <p style={{color: '#999', fontSize: '0.9rem'}}>
          有疑问？查看我们的 <Link to="/docs/04-faq/faq">常见问题</Link> 或访问 <a href="https://github.com/oayzz/tabnest" target="_blank" rel="noopener noreferrer">GitHub</a>
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
