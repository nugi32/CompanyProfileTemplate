'use client'

import Image from 'next/image';
import Link from 'next/link';

interface ServiceShort {
  name: string;
  description: string;
  image: {
    asset: {
      url: string
    }
  }
}

interface ProductServicesProps {
  subContent: string;
  contentShort: ServiceShort[];
}

export default function ProductServices({ subContent, contentShort }: ProductServicesProps) {
  return (
    <section className="bg-[var(--background)] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Our Products & Services
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            {subContent}
          </p>
        </div>

        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
{contentShort?.map((product, index) => (
  <Link 
  key={index}
    href={`/services`}
    className="block"
  >
    <div
      className="bg-[var(--card)] p-6 rounded-lg shadow-md 
                 transform transition duration-300 
                 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <Image 
        src={product.image.asset.url}
        alt={product.name} 
        width={400} 
        height={250} 
        className="rounded-lg mb-4"
      />
      <h3 className="font-bold text-lg text-[var(--foreground)] mb-2">
        {product.name}
      </h3>
      <p className="text-[var(--muted-foreground)]">
        {product.description}
      </p>
    </div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
