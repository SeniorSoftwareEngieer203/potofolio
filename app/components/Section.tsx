interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-12 text-center md:mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--muted)]">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
