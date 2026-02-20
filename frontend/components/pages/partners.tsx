'use client'

import Image from "next/image";

interface Partner {
  name: string;
  logo: {
    asset: {
      url: string
    }
  }
}

interface PartnersProps {
  partnersList: Partner[];
}

export default function Partners({ partnersList }: PartnersProps) {
  return (
    <section className="bg-[var(--background)] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {partnersList?.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 bg-[var(--card)] rounded-full p-2 
                         transform transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              title={partner.name}
            >
              <Image
                src={partner.logo.asset.url}
                alt={partner.name}
                width={120}
                height={120}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
