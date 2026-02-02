import { services } from "@/lib/data";
import { Section } from "../components/Section";

export default function ServicesPage() {
  return (
    <>
      <Section
        title="Services"
        subtitle="End-to-end Shopify and headless commerce. Say yes easily."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--accent)]">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[var(--muted)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
