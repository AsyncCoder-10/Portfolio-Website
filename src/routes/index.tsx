import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Server,
  Sparkles,
  MapPin,
  Calendar,
  Brain,
  BrainCircuit,
  Bot,
  MessageSquareText,
  Zap,
  Puzzle,
  Users,
  Globe,
  MonitorSmartphone,
  Workflow,
  ShieldCheck,
  Boxes,
  Palette,
  LayoutTemplate,
  Grid3X3,
  Layers,
  Cloud,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "RAG Docs Assistant",
    blurb:
      "A retrieval-augmented chatbot over internal documentation — semantic search, source citations, and streaming responses via the OpenAI API.",
    tags: ["Next.js", "LangChain", "Pinecone", "OpenAI API"],
    accent: "from-primary/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "AI Code Review Bot",
    blurb:
      "A GitHub Action that reviews pull requests using an LLM — flags bugs, suggests fixes, and summarizes diffs before a human ever looks.",
    tags: ["Node.js", "GitHub Actions", "Claude API", "TypeScript"],
    accent: "from-secondary/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "Prompt Playground",
    blurb:
      "An internal tool for testing and comparing prompts across models — versioning, side-by-side outputs, and eval scoring for regressions.",
    tags: ["React", "Vercel AI SDK", "Zustand", "OpenAI/Anthropic APIs"],
    accent: "from-accent/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "Healthcare Exchange Platform",
    blurb:
      "Angular 14 SPA integrating with Laravel and Node.js RESTful APIs, serving thousands of active users with modular, reusable component architecture.",
    tags: ["Angular", "RxJS", "Laravel", "Node.js"],
    accent: "from-primary/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "Assessment Data Dashboard",
    blurb:
      "Data-intensive dashboard built with lazy loading and OnPush change detection, optimized for fast load times at scale.",
    tags: ["Angular", "RxJS", "Bundle Optimization"],
    accent: "from-secondary/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "HR Management Suite",
    blurb:
      "Role-based CRUD modules for payroll, employee data, and permissions, integrated with .NET Core APIs and a shared component library cutting UI redundancy by ~30%.",
    tags: ["Angular 12", "RxJS", ".NET Core", "RBAC"],
    accent: "from-accent/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
  {
    title: "Buy Gems - E-commerce Platform",
    blurb:
      "Role-based CRUD modules for payroll, employee data, and permissions, integrated with .NET Core APIs and a shared component library cutting UI redundancy by ~30%.",
    tags: ["Angular 12", "RxJS", ".NET Core", "RBAC"],
    accent: "from-accent/20 to-transparent",
    repo: "https://github.com/AsyncCoder-10",
    //live: "#",
  },
];

const EXPERIENCE = [
  {
    company: "OpenEyes Software Solutions Pvt. Ltd.",
    role: "Senior Full-Stack Engineer",
    dates: "July 2023 – Present",
    location: "Vadodara, India",
    points: [
      "Architected 5+ Angular (v14+) SPAs integrating with Laravel and Node.js RESTful APIs for thousands of active users.",
      "Engineered modular, reusable component libraries with Angular CLI and RxJS, improving development efficiency by 20%.",
      "Applied lazy loading, OnPush change detection, and bundle optimization to speed up data-intensive dashboards.",
      "Drove cross-functional collaboration with QA, design, and backend teams to streamline API data flow and releases.",
    ],
  },
  {
    company: "Brainvire",
    role: "Associate Software Developer",
    dates: "February 2022 – June 2023",
    location: "Ahmedabad, India",
    points: [
      "Built Angular 12 SPAs with route guards, observables, and dynamic components for role-based access workflows.",
      "Developed role-based CRUD modules integrated with .NET Core APIs; built a shared component library cutting UI redundancy ~30% across 5+ modules.",
      "Leveraged RxJS operators (switchMap, combineLatest, debounceTime) for async API management and real-time feedback.",
      "Partnered with QA on automated UI tests, reducing bug rate by 25%.",
    ],
  },
  {
    company: "L&T (Larsen & Toubro)",
    role: "Trainee Software Developer",
    dates: "August 2021 – January 2022",
    location: "Vadodara, India",
    points: [
      "Contributed to front-end development and testing for internal .NET-based web applications.",
      "Resolved API integration bugs and layout issues across teams.",
      "Participated in Agile sprint ceremonies, improving UI consistency and on-time feature delivery.",
    ],
  },
];

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiAngular,
  SiIonic,
  SiBootstrap,
  SiNodedotjs,
  SiLaravel,
  SiDotnet,
  SiGit,
  SiBitbucket,
  SiJira,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";

const SKILLS = [
  {
    category: "Languages & Frontend Core",
    icon: Code2,
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss, color: "#1572B6" },
      { name: "SCSS", Icon: SiSass, color: "#CC6699" },
    ],
  },
  {
    category: "Frameworks & UI Libraries",
    icon: Layers,
    items: [
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "RxJS", Icon: Zap, color: "#B7178C" },
      { name: "NgRx", Icon: Boxes, color: "#BA2BD2" },
      { name: "Ionic", Icon: SiIonic, color: "#3880FF" },
      { name: "Angular Material", Icon: Palette, color: "#757575" },
      { name: "PrimeNG", Icon: LayoutTemplate, color: "#DD0031" },
      { name: "Kendo UI", Icon: Grid3X3, color: "#FF6358" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Backend, Cloud & APIs",
    icon: Server,
    items: [
      { name: "RESTful APIs", Icon: Globe, color: "#10B981" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: ".NET Core", Icon: SiDotnet, color: "#512BD4" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Bitbucket", Icon: SiBitbucket, color: "#0052CC" },
      { name: "JIRA", Icon: SiJira, color: "#0052CC" },
      { name: "Firebase", Icon: SiFirebase, color: "#DD2C00" },
      { name: "Azure", Icon: Cloud, color: "#0078D4" },
      { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    category: "AI / ML & Practices",
    icon: BrainCircuit,
    items: [
      { name: "Generative AI", Icon: Sparkles, color: "#00FF7F" },
      { name: "NLP", Icon: MessageSquareText, color: "#34D399" },
      { name: "Deep Learning", Icon: Brain, color: "#A78BFA" },
      { name: "LLMs", Icon: Bot, color: "#F472B6" },
      { name: "OpenAI", Icon: Bot, color: "#412991" },
      { name: "Responsive Design", Icon: MonitorSmartphone, color: "#60A5FA" },
      { name: "Cross-Browser", Icon: Globe, color: "#FBBF24" },
      { name: "CI/CD", Icon: Workflow, color: "#22D3EE" },
      { name: "Agile / Scrum", Icon: Users, color: "#FB923C" },
      { name: "SOLID", Icon: ShieldCheck, color: "#A3A3A3" },
      { name: "Component Architecture", Icon: Puzzle, color: "#C084FC" },
      { name: "Performance", Icon: Zap, color: "#FACC15" },
    ],
  },
];

const STACK_TAGS = [
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: ".NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Ionic", Icon: SiIonic, color: "#3880FF" },
  { name: "Firebase", Icon: SiFirebase, color: "#DD2C00" },
  { name: "Azure", Icon: Cloud, color: "#0078D4" },
  { name: "OpenAI", Icon: Bot, color: "#412991" },
];

function Portfolio() {
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(n.id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progressX }}
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-primary"
      />

      <NavBar active={active} />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-8">
        <Hero />
        <About />
        <TechStackMarquee />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function NavBar({ active }: { active: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md">
      <div className="border-b border-border/40 bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#home" className="group flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/30">
              <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              anshu<span className="text-primary">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-px bg-primary shadow-glow"
                  />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary/20 hover:shadow-glow sm:block"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Sections ---------------- */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/80">
          <span className="h-px w-8 bg-primary/50" />
          {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 pt-8">
      {/* animated blob */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-pattern" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.82 0.22 148 / 0.35), transparent)",
          animation: "blob 14s ease-in-out infinite",
        }}
      />

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for freelance — Q3 2026
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Building{" "}
            <span className="relative inline-block text-primary text-glow">fast, thoughtful</span>
            <br />
            web products.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm <span className="text-foreground">Anshuman Behera</span>, a full-stack AI engineer.
            I build intelligent, production-ready applications — from LLM-powered features to the
            polished interfaces that ship them.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {/* 
    href="/resume/Anshuman-Behera-Resume.pdf"
    download="Anshuman-Behera-Resume.pdf"
    className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
  >
    <Download className="h-4 w-4" />
    Resume
  </a> */}

            <div className="flex items-center gap-2">
              <a
                href="mailto:anshu.engg07@gmail.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/AsyncCoder-10"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshuman-behera10/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/a.n_s_h.u/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@A-Buzz"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Vadodara, India
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden sm:inline">5+ years shipping products</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto hidden aspect-[4/5] w-64 md:block"
        >
          <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-primary/30 shadow-glow">
            <img
              src={portrait}
              alt="Portrait of Anshuman Behera"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A quiet obsession with craft.">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted-foreground"
        >
          <p>
            I've spent the last few years building products where the model matters as much as the
            interface — recommendation engines, RAG pipelines, and AI-assisted tools used by teams
            to move faster on real work.
          </p>
          <p>
            I care about the details most people won't notice: prompts that stay reliable at scale,
            latency that respects the user's patience, APIs that are easy to hold in your head. Give
            me a messy, ambiguous problem and I'll turn it into something small, sharp, and
            shippable.
          </p>
          <p>Off the clock I'm usually running, reading science-fiction, or pulling espresso.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur"
        >
          <div className="flex items-center gap-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" /> Highlights
          </div>
          <dl className="mt-6 space-y-5">
            {[
              ["5+", "Years shipping to production"],
              ["40k", "Daily users on features I've led"],
              ["30%", "Latency reduction on an AI pipeline"],
              ["4", "Engineers mentored to their first launch"],
            ].map(([n, label]) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <dt className="font-display text-2xl font-semibold text-primary">{n}</dt>
                <dd className="text-right text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
}

function TechStackMarquee() {
  const duplicated = [...STACK_TAGS, ...STACK_TAGS];

  return (
    <section className="relative py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee items-center gap-4 py-2 hover:[animation-play-state:paused]">
          {duplicated.map(({ name, Icon, color }, i) => (
            <div key={`${name}-${i}`} className="group relative shrink-0">
              <button
                type="button"
                aria-label={name}
                className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card/60 text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary/60 hover:bg-primary/5 hover:shadow-glow"
              >
                <Icon
                  className="h-6 w-6 transition-colors duration-300"
                  style={{ color: undefined }}
                  onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) =>
                    (e.currentTarget.style.color = color)
                  }
                  onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) =>
                    (e.currentTarget.style.color = "")
                  }
                />
              </button>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/30 bg-background/95 px-2 py-1 text-[10px] font-medium text-primary opacity-0 shadow-glow backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [dragX, setDragX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, PROJECTS.length - itemsPerPage)));
  }, [itemsPerPage]);

  const maxIndex = Math.max(0, PROJECTS.length - itemsPerPage);
  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;

  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const pauseThenResume = () => {
    setIsPaused(true);
    window.clearTimeout((pauseThenResume as unknown as { _t?: number })._t);
    (pauseThenResume as unknown as { _t?: number })._t = window.setTimeout(
      () => setIsPaused(false),
      4000,
    );
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 60;
    const velocityThreshold = 300;
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      goNext();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      goPrev();
    }
    setDragX(0);
    pauseThenResume();
  };

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4000);
    return () => window.clearInterval(id);
  }, [isPaused, maxIndex]);

  const cardPercentOfTrack = 100 / PROJECTS.length;
  const trackWidthPercent = (PROJECTS.length * 100) / itemsPerPage;

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects I'm proud of.">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDrag={(_, info) => setDragX(info.offset.x)}
            onDragEnd={handleDragEnd}
            animate={{
              x: `-${index * cardPercentOfTrack}%`,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            style={{ width: `${trackWidthPercent}%` }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="shrink-0 px-3"
                style={{ width: `${cardPercentOfTrack}%` }}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition hover:border-primary/40 hover:shadow-glow">
                  <div
                    className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                        <span className="font-display text-sm font-semibold">
                          {p.title.slice(0, 2)}
                        </span>
                      </div>
                      <div className="flex gap-2 opacity-70 transition group-hover:opacity-100">
                        <a
                          href={p.repo}
                          aria-label="GitHub"
                          className="rounded-md p-1.5 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {/* <a
                          href={p.live}
                          aria-label="Live"
                          className="rounded-md p-1.5 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a> */}
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-background to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-background to-transparent sm:block" />

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                goPrev();
                pauseThenResume();
              }}
              disabled={!canGoPrev}
              aria-label="Previous projects"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                goNext();
                pauseThenResume();
              }}
              disabled={!canGoNext}
              aria-label="Next projects"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setIndex(i);
                  pauseThenResume();
                }}
                aria-label={`Go to project page ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built things.">
      <div className="relative">
        <div className="absolute left-3 top-1 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-4" />
        <ol className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-1.5 top-1 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-primary md:left-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
              </span>
              <div className="rounded-xl border border-border bg-card/50 p-6 transition hover:border-primary/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} <span className="text-primary">· {e.company}</span>
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {e.dates}
                    <span className="mx-1">·</span> {e.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="What I reach for.">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/50 p-6 transition hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold">{s.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map(({ name, Icon: ItemIcon, color }) => (
                  <div key={name} className="group relative">
                    <button
                      type="button"
                      aria-label={name}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary/60 hover:bg-primary/5 hover:shadow-glow"
                    >
                      <ItemIcon
                        className="h-5 w-5 transition-colors duration-300"
                        style={{ color: undefined }}
                        onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) =>
                          (e.currentTarget.style.color = color)
                        }
                        onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) =>
                          (e.currentTarget.style.color = "")
                        }
                      />
                    </button>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/30 bg-background/95 px-2 py-1 text-[10px] font-medium text-primary opacity-0 shadow-glow backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something.">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-muted-foreground">
            I'm currently taking on select freelance and contract work for Q3 2026. If you have a
            product in flight — or an idea you want to get airborne — I'd love to hear about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:anshu.engg07@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> anshu.engg07@gmail.com
            </a>
            <a
              href="https://github.com/AsyncCoder-10"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4 text-primary" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anshuman-behera10/"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/a.n_s_h.u/"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-primary" /> Instagram
            </a>
            <a
              href="https://www.youtube.com/@A-Buzz"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
            >
              <Youtube className="h-4 w-4 text-primary" /> YouTube
            </a>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSending(true);
            const form = e.currentTarget;
            const formData = new FormData(form);
            try {
              const res = await fetch("https://formspree.io/f/mgvzyory", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              });
              if (res.ok) {
                setSent(true);
                form.reset();
              }
            } catch (err) {
              console.error(err);
            } finally {
              setSending(false);
            }
          }}
          className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur"
        >
          <div className="grid gap-4">
            <label className="block text-sm">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </span>
              <input
                required
                name="name"
                className="w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@company.com"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full resize-none rounded-md border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow disabled:opacity-60"
            >
              {sent ? "Thanks — I'll be in touch." : sending ? "Sending..." : "Send message"}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <span>© {new Date().getFullYear()} Anshuman Behera. Crafted with care.</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          "Turning ideas into products people actually enjoy."
        </span>
      </div>
    </footer>
  );
}
