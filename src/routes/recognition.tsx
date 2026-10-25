import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Image as ImageIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { RECOGNITION } from "@/lib/recognition";

export const Route = createFileRoute("/recognition")({
  component: RecognitionPage,
  head: () => ({
    meta: [
      { title: "Certifications & Events — Anshuman Behera" },
      {
        name: "description",
        content:
          "Explore certifications, webinars, and expos attended by Anshuman Behera.",
      },
    ],
  }),
});

function RecognitionPage() {
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
            Learning & community
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-semibold sm:text-5xl">
                Certifications & events.
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Certifications, webinars, and expos. Replace the sample entries
                with your own achievements and events.
              </p>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary">
              {RECOGNITION.length} entries
            </span>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RECOGNITION.map(
            (
              {
                category,
                title,
                organizer,
                date,
                icon: Icon,
                image,
                imageAccent,
              },
              index,
            ) => (
              <motion.article
                key={category}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div
                  className={`relative -mx-6 -mt-6 mb-5 flex h-44 items-center justify-center overflow-hidden ${
                    image
                      ? "bg-background/80"
                      : `bg-gradient-to-br ${imageAccent}`
                  }`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`Photo from ${title}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30 [background-image:linear-gradient(30deg,transparent_48%,rgba(255,255,255,0.18)_49%,transparent_50%),linear-gradient(150deg,transparent_48%,rgba(255,255,255,0.12)_49%,transparent_50%)] [background-size:36px_36px]"
                      />
                      <span
                        aria-hidden
                        className="relative grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-background/30 text-white backdrop-blur-sm"
                      >
                        <ImageIcon className="h-5 w-5" />
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-primary/80">
                  {category}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {organizer}
                </p>
                <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {date}
                </div>
              </motion.article>
            ),
          )}
        </div>
      </main>
    </div>
  );
}
