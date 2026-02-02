"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import type { Testimonial } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="relative flex h-full min-w-full flex-col px-2 md:px-4">
      <span
        className="absolute left-0 top-0 text-6xl font-serif leading-none text-[var(--accent)] opacity-60 md:text-8xl"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="flex flex-1 flex-col pl-6 pr-4 pt-8 pb-14 md:pl-10 md:pr-8 md:pt-12 md:pb-16">
        <p className="text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
          {testimonial.quote}
        </p>
        <footer className="mt-8 flex items-center gap-4">
          <div
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--accent)]/20"
            aria-hidden
          >
            <Image
              src={testimonial.avatar}
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <cite className="not-italic font-semibold text-[var(--foreground)]">
              {testimonial.name}
            </cite>
            <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
          </div>
        </footer>
      </div>
      <span
        className="absolute bottom-6 right-4 text-5xl font-serif leading-none text-[var(--accent)] opacity-60 md:bottom-8 md:right-8 md:text-7xl"
        aria-hidden
      >
        &rdquo;
      </span>
    </blockquote>
  );
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  if (!testimonials.length) return null;

  return (
    <div className="relative w-full testimonial-swiper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        grabCursor
        pagination={{ clickable: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
