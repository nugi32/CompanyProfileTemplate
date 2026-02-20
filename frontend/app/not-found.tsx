'use client'

import Link from "next/link";

export default function Custom404() {
  return (
    <main
      className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1
          className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl"
          style={{ color: "var(--color-foreground)" }}
        >
          Page not found
        </h1>
        <p
          className="mt-6 text-lg font-medium sm:text-xl"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
              href="/"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Go back home
            </Link>
        </div>
      </div>
    </main>
  );
}
