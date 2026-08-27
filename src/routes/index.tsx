import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  Shield,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowstate — Work without the noise" },
      {
        name: "description",
        content:
          "Flowstate helps teams focus, ship faster, and breathe easier with calm, purposeful project management.",
      },
      { property: "og:title", content: "Flowstate — Work without the noise" },
      {
        property: "og:description",
        content:
          "Flowstate helps teams focus, ship faster, and breathe easier with calm, purposeful project management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const features = [
  {
    icon: Layers,
    title: "Clarity first",
    description:
      "Organize work into clean streams so everyone knows what matters now — and what can wait.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    description:
      "Built for speed. Create, assign, and move tasks without clicking through endless menus.",
  },
  {
    icon: Shield,
    title: "Private & secure",
    description:
      "Your data is encrypted at rest and in transit. Granular permissions keep teams in their lane.",
  },
  {
    icon: BarChart3,
    title: "Insightful progress",
    description:
      "Spot bottlenecks early with gentle dashboards that surface trends, not anxiety.",
  },
  {
    icon: Users,
    title: "Built for teams",
    description:
      "Mentions, assignments, and async updates that respect focus time and time zones.",
  },
  {
    icon: Sparkles,
    title: "Delightful details",
    description:
      "Micro-animations, keyboard shortcuts, and thoughtful empty states make work feel lighter.",
  },
];

const testimonials = [
  {
    quote:
      "Flowstate replaced three tools for us. The calmest our roadmap has ever looked.",
    author: "Maya Chen",
    role: "Product Lead, Orbita",
  },
  {
    quote:
      "Finally, a project tool that doesn't punish you for having a lot going on.",
    author: "Daniel Okonkwo",
    role: "Engineering Manager, Stacklane",
  },
  {
    quote:
      "Our team actually enjoys checking tasks now. That's saying something.",
    author: "Sarah Lindqvist",
    role: "Design Director, Northmade",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layers className="h-5 w-5" />
            </span>
            Flowstate
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <div className="mx-auto max-w-5xl text-center">
            <a
              href="#"
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-card-foreground transition-colors hover:bg-accent/50"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Now with AI-assisted planning
              <ArrowRight className="h-4 w-4" />
            </a>
            <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Work without the noise
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Flowstate is the calm, focused workspace for teams who want to
              ship great work without drowning in notifications and status
              meetings.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-card-foreground transition-colors hover:bg-accent/50"
              >
                Watch demo
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl rounded-2xl border border-border bg-card p-2 shadow-xl shadow-foreground/5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 grid grid-cols-12 gap-px bg-border">
                {Array.from({ length: 12 * 8 }).map((_, i) => (
                  <div key={i} className="bg-muted" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-3xl rounded-xl border border-border bg-card p-6 shadow-lg">
                  <div className="flex items-center gap-4 border-b border-border pb-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10" />
                    <div className="flex-1">
                      <div className="h-3 w-32 rounded bg-muted" />
                      <div className="mt-2 h-2 w-48 rounded bg-muted/70" />
                    </div>
                    <div className="h-8 w-20 rounded-full bg-primary/10" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg border border-border p-3"
                      >
                        <div className="h-5 w-5 rounded border-2 border-accent/30" />
                        <div className="h-2.5 flex-1 rounded bg-muted" />
                        <div className="h-2.5 w-16 rounded bg-muted/70" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Features
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything you need, nothing you don't
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                A deliberately simple toolkit that stays out of your way so you
                can focus on the work that matters.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30 hover:bg-accent/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24">
          <div className="mx-auto max-w-6xl rounded-3xl bg-secondary px-8 py-16 sm:px-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-secondary-foreground sm:text-4xl">
                Loved by focused teams
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Thousands of teams have traded chaos for clarity. Here's what a
                few of them say.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    "{t.quote}"
                  </p>
                  <footer className="mt-6">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Simple, honest pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start free, upgrade when you're ready. No hidden fees, no
                surprises.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  description: "For individuals and small side projects.",
                  features: [
                    "Up to 3 projects",
                    "Unlimited tasks",
                    "Basic analytics",
                    "Community support",
                  ],
                  cta: "Get started free",
                  primary: false,
                },
                {
                  name: "Pro",
                  price: "$12",
                  description: "For growing teams that need more power.",
                  features: [
                    "Unlimited projects",
                    "Advanced analytics",
                    "Priority support",
                    "Custom workflows",
                    "Team permissions",
                  ],
                  cta: "Start 14-day trial",
                  primary: true,
                },
                {
                  name: "Business",
                  price: "$29",
                  description: "For organizations with advanced needs.",
                  features: [
                    "Everything in Pro",
                    "SSO & SAML",
                    "Audit logs",
                    "Dedicated success manager",
                    "Custom contracts",
                  ],
                  cta: "Contact sales",
                  primary: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-6 ${
                    plan.primary
                      ? "border-accent bg-accent/5"
                      : "border-border bg-card"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/user/mo</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-card-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                      plan.primary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-background text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to find your flow?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join thousands of teams who have made work calmer, clearer, and
              more focused.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-background/90"
              >
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layers className="h-5 w-5" />
            </span>
            Flowstate
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flowstate. Built with care.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
