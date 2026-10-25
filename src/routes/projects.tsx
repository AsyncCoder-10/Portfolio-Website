import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Anshuman Behera" },
      {
        name: "description",
        content: "Explore projects built by Anshuman Behera.",
      },
    ],
  }),
});

function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <header className="border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Link to="/" className="group flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/30">
              <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              anshu<span className="text-primary">.dev</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/80">
            <span className="h-px w-8 bg-primary/50" />
            Selected work
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-semibold sm:text-5xl">
                All projects.
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                A collection of products, tools, and experiments I’ve worked on.
              </p>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary">
              {PROJECTS.length} projects
            </span>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                    <span className="font-display text-sm font-semibold">
                      {project.title.slice(0, 2)}
                    </span>
                  </div>
                  <a
                    href={project.repo}
                    aria-label={`View ${project.title} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <h2 className="mt-6 text-lg font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-background/60 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
                >
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Have a project in mind?
          </p>
          <a
            href="/#contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
          >
            Let’s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
