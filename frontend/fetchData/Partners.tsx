import { client } from "@/lib/client"

interface Partner {
  name: string
  logo: {
    asset: {
      url: string
    }
  }
}

interface PartnersData {
  partnersList: Partner[]
}

export async function getPartnersData(): Promise<PartnersData | null> {
  const data = await client.fetch(`
    *[_type == "partners"][0]{
      partnersList[]{
        name,
        logo{
          asset->{
            url
          }
        }
      }
    }
  `)

  return data || null
}
