import React from 'react';
import { Link } from 'react-router-dom';
import { tributeInfo } from '../config/cardsConfig';

export default function About() {
  return (
    <main className="page-content about-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Life & Philosophy</span>
          <h1 className="page-title">Biography & Personal Dedication</h1>
          <p className="page-subtitle">
            An in-depth look at Linus Torvalds's life, career, and why he serves as a role model for aspiring software engineers.
          </p>
        </div>

        {/* Narrative & Personal Reflection */}
        <section className="about-narrative-section">
          <div className="reflection-card">
            <div className="reflection-content">
              <h2>Why I Look Up to Linus Torvalds</h2>
              <p>
                In the technology world, fame is often associated with visionary entrepreneurs
                who deliver charismatic keynote presentations. For me, <strong>Linus Torvalds</strong> represents
                a completely different and much deeper standard: an engineer who sat in his bedroom in
                Helsinki in 1991 with an Intel 386 machine, created an operating system kernel out of
                curiosity, and gave it to the world for free.
              </p>
              <p>
                What I admire most is his <strong>uncompromising consistency</strong>. Over thirty years
                have passed since Linux was born, yet Linus still reviews code, tests release candidates,
                and communicates on the Linux Kernel Mailing List and GitHub every single week. He never
                drifted into corporate marketing or chased fleeting hype cycles. He stayed close to the code,
                prioritizing correct data structures, robust performance, and user-space stability.
              </p>
              <p>
                His creation of <strong>Git</strong> in 2005 is another testament to his genius. When the
                Linux community faced an impasse with BitKeeper, Linus didn't convene a committee—he took
                a vacation, spent ten days writing code, and emerged with the tool that now underpins
                virtually all collaborative software engineering on Earth.
              </p>
              <p>
                As a student from India working with Python, C, and web applications, Linus's journey
                inspires me to master fundamentals, write clean code, show up every day with consistency,
                and strive to build software that is genuinely useful to humanity.
              </p>

              <div className="narrative-actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <Link to="/inventions" className="btn btn-primary">
                  Explore His Inventions &rarr;
                </Link>
                <Link to="/qualities" className="btn btn-secondary">
                  His Engineering Virtues &rarr;
                </Link>
              </div>
            </div>

            <div className="narrative-sidebar">
              <div className="portrait-box-static">
                <img
                  src="/assets/linus.jpg"
                  alt="Linus Torvalds"
                  className="static-portrait"
                />
                <h3>Linus Benedict Torvalds</h3>
                <p className="portrait-sub">{tributeInfo.title}</p>
                <div className="static-meta">
                  <div><strong>Born:</strong> December 28, 1969 (Helsinki, Finland)</div>
                  <div><strong>Education:</strong> University of Helsinki (M.S. Computer Science)</div>
                  <div><strong>Key Inventions:</strong> Linux Kernel, Git, Subsurface</div>
                  <div><strong>Awards:</strong> Millennium Technology Prize, IEEE Pioneer Award</div>
                </div>
              </div>

              <div className="takeaway-box">
                <h4>Core Takeaways for Engineers</h4>
                <ul>
                  <li><strong>Show, Don't Tell:</strong> "Talk is cheap. Show me the code."</li>
                  <li><strong>Focus on Data Structures:</strong> Good design eliminates edge cases naturally.</li>
                  <li><strong>Never Break User Space:</strong> Reliability is the foundation of user trust.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Early Life and Background */}
        <section className="early-life-section">
          <div className="section-header">
            <span className="section-badge">Origins</span>
            <h2 className="section-title">The Early Years & The 1991 Spark</h2>
          </div>

          <div className="origins-grid">
            <div className="origin-card">
              <h3>The Commodore VIC-20</h3>
              <p>
                Linus was introduced to computers at age eleven through his grandfather, a statistician
                at the University of Helsinki. Using a Commodore VIC-20, Linus began typing in BASIC programs
                and soon learned 6502 machine code from magazines, writing his own text editor and simple games.
              </p>
            </div>
            <div className="origin-card">
              <h3>The MINIX Impasse</h3>
              <p>
                At university, Linus studied Andrew Tanenbaum's MINIX, an educational Unix-like operating system.
                Frustrated by its licensing restrictions and 16-bit design, Linus decided to write a true 32-bit
                task-switching kernel utilizing the advanced memory protection features of the Intel 80386 processor.
              </p>
            </div>
            <div className="origin-card">
              <h3>The Historic Post (August 25, 1991)</h3>
              <p>
                Linus posted to comp.os.minix: <em>"Hello everybody out there using minix - I'm doing a (free)
                operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones..."</em>
                That humble hobby soon became the cornerstone of the internet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
