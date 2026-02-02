import Link from "next/link";
import {
  site,
  trustedSnapshot,
  whatIDo,
  techStack,
  projects,
  testimonials,
} from "@/lib/data";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { TestimonialSlider } from "./components/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center">
        <section
          className="relative w-full"
          style={{
            backgroundImage: 'url("/hero_image1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center md:py-28">
            <div className="w-full rounded-2xl border border-[var(--accent)] bg-[var(--background)]/60 px-2 py-12 shadow-2xl md:px-12 md:py-16">
              <p className="text-lg font-medium uppercase tracking-widest text-[var(--accent)]">
                Trusted by growing eCommerce brands
              </p>
              <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
                {site.title}
              </h1>
              <p className="mt-6 text-lg text-[var(--muted)] md:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                {site.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/work"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-lg transition hover:bg-[var(--accent-hover)] hover:shadow-[var(--accent)]/20"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Trusted Experience Snapshot */}
      <Section
        className="border-t border-b border-[var(--border)] "
        title="Trusted by growing eCommerce brands"
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {trustedSnapshot.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center text-center flex-1"
            >
              <Image src={item} alt={item} width={200} height={200} className="h-30 sm:h-35 w-auto flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Recent Work */}
      <Section
        id="work"
        title="Featured Recent Work"
        subtitle="Proof, not just skills. Latest projects with measurable results."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
          >
            View all work →
          </Link>
        </div>
      </Section>

      {/* Track record – stats left, image right */}
      <Section
        className="border-t border-[var(--border)]"
        title="Proven results"
        subtitle="Years of delivery and client trust."
      >
        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          {/* Left: 4 stat cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:gap-5">
            {[
              {
                value: "8+",
                label: "Years of Professional Web Development Experience",
              },
              {
                value: "40+",
                label: "Successful Websites & Digital Projects Delivered",
              },
              {
                value: "100%",
                label: "Long Term Client Trust and Satisfaction",
              },
              {
                value: "85%+",
                label: "Repeat & Long-Term Clients",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-4 transition-colors duration-300 md:p-5"
              >
                <p className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)] md:mt-2 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right: image card – #222 border, hover → accent + image scale; clear boundary below image */}
          <div
            className="group relative overflow-hidden rounded-xl border border-[#222] bg-[var(--card)] transition-[border-color] duration-300 hover:border-[var(--accent)] md:col-span-3"
          >
            <div className="relative overflow-hidden border-b-2 border-[#333] bg-[#111]">
              <div className="aspect-[4/3] w-full overflow-hidden md:aspect-video">
                <Image
                  src="/hero_image1.png"
                  alt="Web development and digital delivery"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section
        title="What I Do"
        subtitle="End-to-end Shopify and headless commerce solutions."
        className="border-t border-[var(--border)] bg-[var(--card)]/50"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {whatIDo.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--accent)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack" subtitle="Tools and platforms I work with.">
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Commerce & Frontend
            </p>
            <p className="mt-2 text-[var(--foreground)]">
              {techStack.commerce.join(" · ")}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Infra & Deploy
            </p>
            <p className="mt-2 text-[var(--foreground)]">
              {techStack.infra.join(" · ")}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Tools
            </p>
            <p className="mt-2 text-[var(--foreground)]">
              {techStack.tools.join(" · ")}
            </p>
          </div>
        </div>
      </Section>

      {/* Client Feedback & Experiences - parallax + slider */}
      <section
        id="testimonials"
        className="relative min-h-[480px] overflow-hidden border-t border-[var(--border)] py-20 md:py-28"
        aria-labelledby="client-feedback-heading"
      >
        {/* Parallax background - fixed attachment creates scroll parallax effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url(/world-wide.png)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[var(--background)]/85"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/70 to-transparent md:via-transparent" aria-hidden />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-stretch md:gap-16 md:px-6">
          {/* Left: title + trust */}
          <div className="flex flex-1 flex-col justify-center md:max-w-md">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Client Feedback Highlights
            </p>
            <h2
              id="client-feedback-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Client Feedback
              <br />
              &amp; Experiences
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                {testimonials.slice(0, 3).map((t) => (
                  <div
                    key={t.name}
                    className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[var(--background)] bg-[var(--card)] md:h-16 md:w-16"
                    aria-hidden
                  >
                    <Image
                      src={t.avatar}
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--background)] md:h-16 md:w-16 z-1"
                  style={{ backgroundColor: "#2E2E2E" }}
                  aria-hidden
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-[var(--accent)]"
                    aria-hidden
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
              <span className="text-[var(--foreground)]">
                <strong className="font-semibold">12k+</strong>{" "}
                <span className="text-[var(--muted)]">people trust us</span>
              </span>
            </div>
          </div>

          {/* Right: testimonial slider */}
          <div className="flex-1 min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/80 p-6 backdrop-blur-sm md:p-8">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Let&apos;s build a store that converts.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Ready to improve speed, conversion, and revenue? Get in touch.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
