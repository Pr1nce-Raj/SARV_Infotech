# SARV Infotech Private Limited — Web Development Internship

This repository contains the completed web development internship projects for **SARV Infotech Private Limited**, authored by **Prince Raj**.

The codebase is engineered with **React + Vite**, featuring modular components, **multi-page routing**, prebuilt data configuration, **interoperable Card components**, and **Dark/Light mode support (defaulting to Light Mode)**.

---

## 📁 Repository Structure

```text
SARV_Infotech/
│
├── level 1 task 1/                   # Level 1 Task 1: Personal Portfolio (Multi-Page React + Vite)
│   ├── index.html                    # Vite HTML entry point
│   ├── package.json                  # React + Vite + React Router dependencies
│   ├── vite.config.js                # Vite build configuration
│   ├── public/assets/                # Public static assets (profile.jpg, project SVGs)
│   └── src/
│       ├── main.jsx                  # React DOM root renderer
│       ├── App.jsx                   # Router container & Theme state
│       ├── index.css                 # Responsive styling with Light/Dark themes
│       ├── components/
│       │   ├── Navbar.jsx            # Multi-page NavLink bar + Theme toggle
│       │   ├── Card.jsx              # Interoperable Card component
│       │   └── Footer.jsx            # Portfolio footer
│       ├── page/
│       │   ├── Home.jsx              # Hero, Bio summary, Featured highlights, CTA
│       │   ├── About.jsx             # Comprehensive developer narrative & milestones
│       │   ├── Projects.jsx          # Interactive projects catalog with category filters
│       │   ├── Skills.jsx            # Detailed skills matrix & engineering standards
│       │   └── Contact.jsx           # Direct message form, socials, recruiter FAQs
│       └── config/
│           └── cardsConfig.js        # Prebuilt configuration array for cards & skills
│
├── level 2 task 1/                   # Level 2 Task 1: Linus Torvalds Tribute (Multi-Page React + Vite)
│   ├── index.html                    # Vite HTML entry point
│   ├── package.json                  # React + Vite + React Router dependencies
│   ├── vite.config.js                # Vite build configuration
│   ├── public/assets/                # Public static assets (linus.jpg)
│   └── src/
│       ├── main.jsx                  # React DOM root renderer
│       ├── App.jsx                   # Router container & Theme state
│       ├── index.css                 # Editorial tech styling with Light/Dark themes
│       ├── components/
│       │   ├── Navbar.jsx            # Tribute NavLink header + Theme toggle
│       │   ├── Card.jsx              # Interoperable Card component
│       │   └── Footer.jsx            # Tribute signature footer
│       ├── page/
│       │   ├── Home.jsx              # Hero, Overview, Inventions snapshot, Quotes
│       │   ├── About.jsx             # Full biography & Prince Raj's personal dedication
│       │   ├── Inventions.jsx        # Linux Kernel, Git, and Subsurface deep-dive
│       │   ├── Qualities.jsx         # Consistency, Simplicity, Generosity, Meritocracy
│       │   ├── Timeline.jsx          # Complete milestone roadmap (1969 – Present)
│       │   └── Quotes.jsx            # Interactive categorized quotes with copy feature
│       └── config/
│           └── cardsConfig.js        # Prebuilt configuration array for tribute cards
│
├── .gitignore                        # Git configuration
└── README.md                         # Project documentation & run guide
```

---

## 🚀 Projects Overview

### 1. Level 1 – Task 1: Personal Portfolio (`level 1 task 1/`)
A multi-page portfolio website showcasing the technical achievements, projects, and skills of **Prince Raj**.

* **Multi-Page Architecture**: Implemented with clean client routing (`/`, `/about`, `/projects`, `/skills`, `/contact`) and active route indicators.
* **Theme Support**: Default **Light Mode** with smooth **Dark Mode** toggle and `localStorage` persistence.
* **Card Interoperability**: Built around a reusable `Card.jsx` component that dynamically renders skills and projects from `cardsConfig.js`.
* **Pages**:
  * **Home (`/`)**: High-impact hero introduction, profile portrait, resume download button, project highlights, and quick skills preview.
  * **About (`/about`)**: Detailed story of Prince Raj's journey from low-level C programming to Python socket security and modern React, with achievements like 1st Place at the National Youth Festival.
  * **Projects (`/projects`)**: Full catalog with interactive category filters (`All`, `Systems & Security`, `Web & Collaboration`, `Tools & Utilities`):
    * `Threat_Monitor` — Python raw socket packet security inspection & intrusion detector.
    * `Campus Gigs` — 1st Place National Youth Festival award winner.
    * `Study Roadmap Tracker` — Firebase task management & cloud storage ([GitHub Repo](https://github.com/Pr1nce-Raj/Study-roadmap-tracker)).
    * `Socket Chat Daemon` — Multi-threaded client-server messaging system.
    * `Algorithm Visualizer` — Interactive sorting and pathfinding animations.
    * `Automated Task Scheduler` — Python cron automation utility.
  * **Skills (`/skills`)**: Comprehensive matrix of languages, frameworks, systems, databases, and engineering standards.
  * **Contact (`/contact`)**: Working direct messaging form with Indian placeholders, one-click email copy (`rajprince3457@gmail.com`), social badges, and recruiter FAQs.

---

### 2. Level 2 – Task 1: Tribute Page to Linus Torvalds (`level 2 task 1/`)
An editorial tribute page celebrating **Linus Torvalds**, creator of the **Linux Kernel** and **Git**.

* **Multi-Page Architecture**: Separated into focused pages (`/`, `/about`, `/inventions`, `/qualities`, `/timeline`, `/quotes`).
* **Theme Support**: Clean **Light Mode** by default with an instant **Dark Mode** switch.
* **Component Architecture**: Powered by the same interoperable `Card.jsx` component pattern.
* **Pages**:
  * **Overview (`/`)**: Hero tribute banner, iconic portrait, snapshot of the Twin Pillars, and featured reflections.
  * **Biography (`/about`)**: Personal dedication highlighting Prince Raj's admiration for Linus's 30+ years of daily consistency on GitHub, early life with the Commodore VIC-20, and the historic 1991 MINIX post.
  * **Inventions (`/inventions`)**: Architectural breakdown of the Linux Kernel, Git's content-addressable DAG model, and Subsurface dive log.
  * **Qualities (`/qualities`)**: Deep dives into Consistency, Pragmatic Simplicity, Open-Source Generosity, and Technical Meritocracy.
  * **Timeline (`/timeline`)**: Chronological roadmap spanning from 1969 to present.
  * **Quotes (`/quotes`)**: Categorized database of iconic quotes with one-click clipboard copying.

---

## 💻 How to Run Locally

### Running Level 1 Task 1 (Portfolio):
```bash
cd "level 1 task 1"
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Running Level 2 Task 1 (Linus Torvalds Tribute):
```bash
cd "level 2 task 1"
npm install
npm run dev -- --port 5174
```
Open `http://localhost:5174` in your browser.

---

## 👤 Author Information

* **Developer**: Prince Raj
* **GitHub**: [@Pr1nce-Raj](https://github.com/Pr1nce-Raj)
* **LinkedIn**: [linkedin.com/in/pr1nceraj](https://www.linkedin.com/in/pr1nceraj)
* **Email**: [rajprince3457@gmail.com](mailto:rajprince3457@gmail.com)
* **Repository**: [https://github.com/Pr1nce-Raj/SARV_Infotech.git](https://github.com/Pr1nce-Raj/SARV_Infotech.git)

---

## 📌 Submission Tags
#SARVInfotechPrivateLimited #internship #webdevelopment #react #vite #multipage
