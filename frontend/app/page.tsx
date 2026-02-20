
// components
import LandingPage from "@/components/pages/landingPage";
import About from "@/components/pages/about";
import ProductServices from "@/components/pages/productServices";
import Testimonials from "@/components/pages/testimonials";
import Partners from "@/components/pages/partners";

// ui
import FadeInSection from '@/components/FadeInSection';
import { Suspense } from "react";
import ScrollHandler from "@/components/ScrollHandler";

// components data
import { getLandingPageData } from "@/fetchData/LandingPage";
import { getAboutData } from "@/fetchData/AboutUS";
import { getProductServicesData } from "@/fetchData/ProductServices";
import { getTestimonialsData } from "@/fetchData/Testimonials";
import { getPartnersData } from "@/fetchData/Partners";

export default async function Home() {

  const LandingPageData = await getLandingPageData();
  const AboutData = await getAboutData();
  const ProductServicesData = await getProductServicesData();
  const TestimonialsData = await getTestimonialsData();
  const PartnersData = await getPartnersData();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen items-center justify-center font-sans">

      <FadeInSection>
      <LandingPage
      title={LandingPageData.title}
      subTitle={LandingPageData.subTitle}
      backgroundImageUrl={LandingPageData.backgroundImageUrl}
      />
      </FadeInSection>


{AboutData ? (
  <FadeInSection>
    <About 
      subTitle={AboutData.subTitle}
      teams={AboutData.teams}
      missionText={AboutData.misionText}
      visionText={AboutData.visionText}
      illustration={AboutData.ilustration}
      whyChooseUs={AboutData.whyChooseUs} 
    />
    <Suspense fallback={null}>
      <ScrollHandler />
    </Suspense>
    <section id="ABOUT"></section>
  </FadeInSection>
) : (
  <p className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center m-10">UPS! data is not available</p>
)}

      <FadeInSection>
        {ProductServicesData ? (
          <ProductServices 
            subContent={ProductServicesData.subContent}
            contentShort={ProductServicesData.contentShort}
          />
        ) : (
          <p className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center m-10">Product Services data is not available</p>
        )}
      </FadeInSection>

      <FadeInSection>
        {TestimonialsData ? (
          <Testimonials testimonialsList={TestimonialsData.testimonialsList} />
        ) : (
          <p className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center m-10">Testimonials data is not available</p>
        )}
      </FadeInSection>

      <FadeInSection>
        {PartnersData ? (
          <Partners partnersList={PartnersData.partnersList} />
        ) : (
          <p className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center m-10">Partners data is not available</p>
        )}
      </FadeInSection>
    </div>
  );
}
