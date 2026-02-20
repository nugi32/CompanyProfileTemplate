"use client";

import Image from "next/image";

interface Testimonial {
  review: string;
  name: string;
  account: string;
  pict: {
    asset: {
      url: string
    }
  };
  featured: boolean;
}

interface TestimonialsProps {
  testimonialsList: Testimonial[];
}

export default function Testimonials({ testimonialsList }: TestimonialsProps) {
  return (
    <section className="bg-[var(--background)] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--primary)] font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            We have worked with thousands of amazing people
          </h2>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {testimonialsList?.map((t, index) => (
            <div
              key={index}
              className={`break-inside-avoid bg-[var(--card)] p-6 rounded-lg shadow-md mb-6
                transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer
                ${t.featured ? "sm:col-span-2 lg:col-span-2 text-lg p-8 w-full" : "w-full"}`}
            >
              <p
                className={`text-[var(--muted-foreground)] mb-6 ${t.featured ? "text-xl" : ""} break-words`}
              >
                {t.review}
              </p>
              <div className="flex items-center mt-auto">
                <Image
                  src={t.pict.asset.url}
                  alt={t.name}
                  width={t.featured ? 64 : 48}
                  height={t.featured ? 64 : 48}
                  className="rounded-full mr-4 flex-shrink-0"
                />
                <div>
                  <h4
                    className={`font-bold text-[var(--foreground)] ${
                      t.featured ? "text-lg" : "text-base"
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-[var(--muted-foreground)] ${
                      t.featured ? "text-base" : "text-sm"
                    }`}
                  >
                    {t.account}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}