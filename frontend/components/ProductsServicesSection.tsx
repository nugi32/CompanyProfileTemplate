'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';

interface ItemShort {
  id: number;
  name: string;
  description: string;
  image: {
    asset: {
      url: string
    }
  };
}

interface ItemFull extends ItemShort {
  list?: string[];
}

interface ProductsServicesSectionProps {
  contentShort: ItemShort[];
  contentFull: ItemFull[];
}

export default function ProductsServicesSection({ contentShort, contentFull }: ProductsServicesSectionProps) {
  const [selectedItem, setSelectedItem] = useState<ItemShort | null>(null);

  const getFullItem = (id: number): ItemFull | undefined => {
    return contentFull.find(
      (item: ItemFull) => item.id === id
    );
  };

  return (
    <>
      {/* Grid Section */}
      <FadeInSection>
        <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-[var(--background)]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold text-[var(--primary)]">
              Our Products & Services
            </h2>
            <p className="mt-2 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
              Explore what we offer
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contentShort?.map((item: ItemShort) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer rounded-3xl p-6 shadow-lg ring-1 ring-[var(--border)] bg-[var(--card)] hover:scale-105 transition-transform"
              >
                {item.image && (
                  <Image
                    src={item.image.asset.url}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="h-40 w-full object-cover rounded-xl mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'var(--overlay)' }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl max-w-lg w-full p-6 relative bg-[var(--card)] shadow-2xl ring-1 ring-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image && (
                <Image
                  src={selectedItem.image.asset.url}
                  alt={selectedItem.name}
                  width={120}
                  height={120}
                  className="h-48 w-full object-cover rounded-xl mb-4"
                />
              )}

              <h3 className="text-2xl font-bold text-[var(--foreground)]">
                {selectedItem.name}
              </h3>

              <p className="mt-2 text-[var(--muted-foreground)]">
                {selectedItem.description}
              </p>

              {/* Detail Features */}
              {(() => {
                const fullItem = getFullItem(selectedItem.id);

                if (!fullItem?.list) return null;

                return (
                  <ul className="mt-4 space-y-1 list-disc list-inside text-[var(--muted-foreground)]">
                    {fullItem.list.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                );
              })()}

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 px-4 py-2 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

