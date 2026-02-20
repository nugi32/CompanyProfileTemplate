"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  pict: {
    asset: {
      url: string
    }
  };
}

interface WhyChoose {
  title: string;
  content: string;
}

interface AboutProps {
  subTitle: string;
  teams: TeamMember[];
  missionText: string;
  visionText: string;
  illustration: {
    asset: {
      url: string
    }
  };
  whyChooseUs: WhyChoose[];
}

export default function AboutUs({
  subTitle,
  teams,
  missionText,
  visionText,
  illustration,
  whyChooseUs,
}: AboutProps) {
  return (
    <section className="bg-[var(--background)] py-16" id="ABOUT">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            About Us
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            {subTitle}
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teams?.map((member) => (
              <div
                key={member.name}
                className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={member.pict.asset.url}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto shadow-lg"
                  priority={false}
                />
                <h4 className="mt-4 font-bold text-lg text-[var(--foreground)]">
                  {member.name}
                </h4>
                <p className="text-[var(--muted-foreground)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Our Mission
            </h3>
            <p className="text-[var(--muted-foreground)] mb-4">{missionText}</p>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Our Vision
            </h3>
            <p className="text-[var(--muted-foreground)]">{visionText}</p>
          </div>
          <div>
            <Image
              src={illustration.asset.url}
              alt="Our Mission"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs?.map((why) => (
              <div
                key={why.title}
                className="bg-[var(--card)] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <h4 className="font-bold text-lg text-[var(--foreground)] mb-2">
                  {why.title}
                </h4>
                <p className="text-[var(--muted-foreground)]">{why.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}