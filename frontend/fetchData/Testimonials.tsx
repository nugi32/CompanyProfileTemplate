import { client } from "@/lib/client"

interface Testimonial {
  review: string
  name: string
  account: string
  pict: {
    asset: {
      url: string
    }
  }
  featured: boolean
}

interface TestimonialsData {
  testimonialsList: Testimonial[]
}

export async function getTestimonialsData(): Promise<TestimonialsData | null> {
  const data = await client.fetch(`
    *[_type == "testimonials"][0]{
      testimonialsList[]{
        review,
        name,
        account,
        pict{
          asset->{
            url
          }
        },
        featured
      }
    }
  `)

  return data || null
}
