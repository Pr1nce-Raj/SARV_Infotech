// Prebuilt configuration data for Linus Torvalds multi-page tribute
// Demonstrating clean card interoperability

export const tributeInfo = {
  name: "Linus Torvalds",
  title: "Creator of the Linux Kernel & Git",
  dates: "1969 – Present",
  headline: "The Architect of Modern Open-Source Computing",
  personalNote: "Linus Torvalds is the engineer I look up to most. His unmatched consistency on GitHub and the Linux mailing lists for over three decades, along with giving Linux and Git freely to humanity, inspires me to strive to write software that is genuinely useful to the world.",
  quote: "Talk is cheap. Show me the code.",
};

export const inventionsConfig = [
  {
    id: "linux-kernel",
    title: "The Linux Kernel",
    category: "Operating Systems",
    badge: "1991 – Present",
    description: "Started as a university project on an Intel 386 machine. Today, Linux powers over 85% of global cloud servers, 100% of the world's top 500 supercomputers, billions of Android devices, and space exploration rovers.",
    tags: ["C Language", "Operating Systems", "Kernel Architecture", "Open Source"],
    highlight: "Powers 500/500 top supercomputers & modern cloud",
    link: "https://www.kernel.org",
    buttonText: "Explore Kernel.org",
    impact: "Over 30 million lines of code maintained collaboratively across 1,000+ companies. Underpins the modern internet infrastructure, AWS, Google Cloud, Docker, Kubernetes, and Android.",
  },
  {
    id: "git-vcs",
    title: "Git Version Control",
    category: "Developer Tooling",
    badge: "Created 2005",
    description: "Frustrated by existing version control solutions, Linus built the foundations of Git in approximately 10 days. Today, Git is the undisputed worldwide standard for distributed version control, powering GitHub and millions of engineering teams.",
    tags: ["Distributed Systems", "Data Structures", "VCS", "C"],
    highlight: "World standard for collaborative code",
    link: "https://git-scm.com",
    buttonText: "Explore Git-SCM",
    impact: "Introduced content-addressable storage using cryptographic SHA-1 hashes and directed acyclic graphs (DAG). Decentralized version control made modern continuous delivery and open-source collaboration possible.",
  },
  {
    id: "subsurface",
    title: "Subsurface Dive Log",
    category: "Specialized Software",
    badge: "Created 2011",
    description: "As an enthusiastic scuba diver frustrated by proprietary, Windows-only dive computer software, Linus created Subsurface—a cross-platform, open-source dive logger.",
    tags: ["C++", "Qt", "Scuba Diving", "Cross-Platform"],
    highlight: "Built for the global diving community",
    link: "https://subsurface-divelog.org",
    buttonText: "Explore Subsurface",
    impact: "Demonstrates his philosophy that whenever existing tools fall short, an engineer writes a better, open alternative to benefit the wider community.",
  },
];

export const qualitiesConfig = [
  {
    id: "consistency",
    title: "Relentless Consistency",
    category: "Work Ethic",
    badge: "30+ Years Active",
    description: "Decade after decade, Linus reviews patches, tests releases, and commits code without interruption. His discipline proves that world-changing impact comes from daily dedication.",
    tags: ["Discipline", "Daily Commits", "Code Review"],
    deepDive: "Linus has never abandoned the Linux project. Even through immense industry transformations, he maintained a continuous release cadence every 9 to 10 weeks for over three decades.",
  },
  {
    id: "pragmatism",
    title: "Pragmatic Engineering",
    category: "Philosophy",
    badge: "Good Taste in Code",
    description: "Linus famously advocates for 'good taste'—preferring simple, elegant data structures and eliminating special edge cases over overly clever, convoluted abstractions.",
    tags: ["Simplicity", "Data Structures", "Pointers"],
    deepDive: "He prioritizes foundational simplicity over abstract design patterns. In his famous TED interview, he demonstrated eliminating special cases in linked lists using single pointers.",
  },
  {
    id: "generosity",
    title: "Open-Source Generosity",
    category: "Global Impact",
    badge: "GPL v2",
    description: "Instead of building a closed commercial empire, Linus licensed Linux under the GPL v2 and released Git to the public domain. His work unlocked trillions of dollars in global innovation.",
    tags: ["Freedom", "Collaboration", "Public Good"],
    deepDive: "By rejecting proprietary lock-in, Linus ensured that individuals, educational institutions, and developing nations have equal access to world-class computing platforms.",
  },
  {
    id: "meritocracy",
    title: "Meritocratic Leadership",
    category: "Standards",
    badge: "Technical Rigor",
    description: "Linus evaluates code strictly on technical merit, performance, and correctness. This unrelenting standard ensured Linux remained rock-solid across 30+ million lines of code.",
    tags: ["Zero Regression", "Correctness", "Performance"],
    deepDive: "His golden rule is: 'We never break user space.' Any kernel change that disrupts existing applications is swiftly rejected, preserving unmatched backward compatibility.",
  },
];

export const timelineConfig = [
  {
    year: "1969",
    title: "Born in Helsinki, Finland",
    description: "Born into a family of journalists, Linus began programming as a child on his grandfather's Commodore VIC-20, writing BASIC scripts and machine code.",
  },
  {
    year: "1988",
    title: "University of Helsinki",
    description: "Enrolled in the University of Helsinki studying computer science, diving deep into operating system theory and the UNIX philosophy.",
  },
  {
    year: "1991",
    title: "Announces Linux 0.01",
    description: "Posted his historic message to the comp.os.minix newsgroup: 'I'm doing a (free) operating system, just a hobby, won't be big and professional like gnu...'",
  },
  {
    year: "1992",
    title: "Re-licensed under GNU GPL v2",
    description: "Adopted the GNU General Public License, ensuring Linux would forever remain free and open for community modification and contribution.",
  },
  {
    year: "1996",
    title: "Tux the Penguin Mascot",
    description: "Selected Tux the Penguin as the official mascot of Linux, representing a friendly, accessible, and community-driven computing spirit.",
  },
  {
    year: "2005",
    title: "Creates Git in ~10 Days",
    description: "Designed a new distributed version control system based on cryptographic hashes and directed acyclic graphs to manage Linux development after BitKeeper access was revoked.",
  },
  {
    year: "2012",
    title: "Millennium Technology Prize",
    description: "Awarded the Millennium Technology Prize, often considered engineering's equivalent to the Nobel, recognizing his impact on open software.",
  },
  {
    year: "2018",
    title: "IEEE Computer Pioneer Award",
    description: "Honored by the IEEE Computer Society for his pioneering contributions to the development of the Linux kernel and open-source operating systems.",
  },
  {
    year: "Present",
    title: "Overseeing 30M+ Lines of Code",
    description: "Continues to act as the chief architect of the Linux kernel, coordinating release candidates with the same daily consistency he demonstrated in 1991.",
  },
];

export const quotesConfig = [
  {
    id: 1,
    category: "Coding",
    quote: "Talk is cheap. Show me the code.",
    context: "Linux Kernel Mailing List (2000)",
    lesson: "In software engineering, functional prototypes and working code outweigh endless debates.",
  },
  {
    id: 2,
    category: "Open Source",
    quote: "Given enough eyeballs, all bugs are shallow.",
    context: "Linus's Law (Formulated by Eric S. Raymond)",
    lesson: "Broad community peer review dramatically improves security and defect detection.",
  },
  {
    id: 3,
    category: "Architecture",
    quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    context: "Git Design Reflections (2006)",
    lesson: "When the underlying data structures are designed correctly, the algorithms write themselves.",
  },
  {
    id: 4,
    category: "Philosophy",
    quote: "I'm looking at the ground, and I want to fix the pothole that's right in front of me before I fall in.",
    context: "On Pragmatic Engineering vs. Vague Vision",
    lesson: "Solve concrete, immediate problems exceptionally well rather than getting paralyzed by speculative futures.",
  },
  {
    id: 5,
    category: "Simplicity",
    quote: "Good taste is about seeing the big picture and having intuition about what works cleanly without special cases.",
    context: "TED Interview with Chris Anderson (2016)",
    lesson: "Eliminating edge cases at the algorithmic level is the hallmark of true code craftsmanship.",
  },
  {
    id: 6,
    category: "Community",
    quote: "I didn't start Linux to make money. I started it because I wanted an operating system that worked for me.",
    context: "Reflections on Open Source Impact",
    lesson: "The greatest engineering projects are born out of genuine need and curiosity, not artificial market hype.",
  },
];
