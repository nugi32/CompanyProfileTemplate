'use client'

import Link from 'next/link'

interface LandingPageProps {
  title: string
  subTitle: string
  backgroundImageUrl: string | null
}

export default function LandingPage({
  title,
  subTitle,
  backgroundImageUrl,
}: LandingPageProps) {
  return (
    <div className="relative isolate px-6 lg:px-8 min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`
        }}
      />

      {/* Overlay Gelap */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      />

      {/* Konten Hero */}
      <div className="relative z-10 text-center w-full">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          {title}
        </h1>
        <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl/8">
          {subTitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/services"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:brightness-90"
          >
            Get started
          </Link>
          <Link href="#FOOTER" className="text-sm font-semibold text-white">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  )
}