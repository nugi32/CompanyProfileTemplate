"use client";

import { Mail, Phone, MapPin } from "lucide-react";

interface Service {
  name: string;
}

interface ProductServices {
  title: string;
  content: Service[];
}

interface Contact {
  title: string;
  location: string;
  gmail: string;
  contactNumber: string;
}

interface SocialLink {
  platform: string;
  link: string;
}

interface Company {
  name: string;
  shortDescription: string;
}

interface FooterProps {
  company: Company;
  productServices: ProductServices;
  contact: Contact;
  socialMedia: SocialLink[];
  copyright: string;
}

export default function Footer({
  company,
  productServices,
  contact,
  socialMedia,
  copyright
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-background" id="FOOTER">
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {company.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.shortDescription}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {productServices.title}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {productServices.content.map((service, index) => (
                <li key={index} className="text-muted-foreground">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {contact.title}
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                {contact.location}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                {contact.gmail}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                {contact.contactNumber}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Social Media
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {socialMedia.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {copyright}
        </div>
      </div>
    </footer>
  );
}