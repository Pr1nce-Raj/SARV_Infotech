import React from 'react';
import Card from '../components/Card';
import { inventionsConfig } from '../config/cardsConfig';

export default function Inventions() {
  return (
    <main className="page-content inventions-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Engineering Feats</span>
          <h1 className="page-title">The Inventions of Linus Torvalds</h1>
          <p className="page-subtitle">
            How two projects built by one Finnish engineer came to run global infrastructure and modernize software development.
          </p>
        </div>

        {/* Inventions Cards Grid */}
        <div className="cards-grid">
          {inventionsConfig.map((inv) => (
            <Card
              key={inv.id}
              title={inv.title}
              category={inv.category}
              badge={inv.badge}
              description={inv.description}
              tags={inv.tags}
              highlight={inv.highlight}
              link={inv.link}
              buttonText={inv.buttonText}
            >
              {inv.impact && (
                <div className="invention-impact-box">
                  <strong>Global Impact:</strong>
                  <p>{inv.impact}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Technical Deep Dive Comparison */}
        <section className="tech-breakdown-section">
          <div className="section-header">
            <span className="section-badge">Architectural Brilliance</span>
            <h2 className="section-title">Why These Systems Succeeded</h2>
          </div>

          <div className="breakdown-grid">
            <div className="breakdown-card">
              <h3>Linux Kernel Architecture</h3>
              <p>
                Unlike strict microkernels which suffered performance degradation from inter-process
                communication (IPC) overhead, Linus chose a <strong>monolithic modular kernel</strong>.
                Loadable Kernel Modules (LKMs) allow dynamic loading of device drivers and filesystem handlers
                into kernel address space while retaining direct, blazingly fast execution speeds.
              </p>
              <ul className="breakdown-points">
                <li>Zero IPC penalty for core kernel subsystems.</li>
                <li>Dynamic hardware detection and driver hot-plugging.</li>
                <li>Powers 100% of the top 500 supercomputers on Earth.</li>
              </ul>
            </div>

            <div className="breakdown-card">
              <h3>Git's Content-Addressable Model</h3>
              <p>
                Prior VCS systems (CVS, SVN, BitKeeper) treated code as file diffs over time. Linus
                conceptualized Git as a <strong>content-addressable filesystem</strong> with a directed
                acyclic graph (DAG) of commit objects. Every commit points to a tree of blobs identified
                strictly by cryptographic SHA-1/SHA-256 hashes.
              </p>
              <ul className="breakdown-points">
                <li>Cryptographic immutability guarantees code history integrity.</li>
                <li>Branching is instantaneous—just moving a 41-byte pointer.</li>
                <li>True decentralization without single points of server failure.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
