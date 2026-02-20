import { client } from "@/lib/client"

interface Service {
  name: string
}

interface ProductServices {
  title: string
  content: Service[]
}

interface Contact {
  title: string
  location: string
  gmail: string
  contactNumber: string
}

interface SocialLink {
  platform: string
  link: string
}

interface Company {
  name: string
  shortDescription: string
}

interface FooterDataResponse {
  company: Company
  productServices: ProductServices
  contact: Contact
  socialMedia: SocialLink[]
  copyrigth: string
}

export async function getFooterData(): Promise<FooterDataResponse | null> {
  const data = await client.fetch(`
    *[_type == "footer"][0]{
      company{
        name,
        shortDescription
      },
      productServices{
        title,
        content[]{
          name
        }
      },
      contact{
        title,
        location,
        gmail,
        contactNumber
      },
      socialMedia[]{
        platform,
        link
      },
      copyrigth
    }
  `)

  return data || null
}