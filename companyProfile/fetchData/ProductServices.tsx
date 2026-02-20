import { client } from "@/lib/client"

interface ServiceShort {
  id: number
  name: string
  description: string
  image: {
    asset: {
      url: string
    }
  }
}

interface ServiceFull {
  id: number
  name: string
  description: string
  list: string[]
  image: {
    asset: {
      url: string
    }
  }
}

interface ProductServicesData {
  subContent: string
  contentShort: ServiceShort[]
  contentFull: ServiceFull[]
}

export async function getProductServicesData(): Promise<ProductServicesData | null> {
  const data = await client.fetch(`
    *[_type == "productServices"][0]{
      subContent,
      contentShort[]{
        id,
        name,
        description,
        image{
          asset->{
            url
          }
        }
      },
      contentFull[]{
        id,
        name,
        description,
        list,
        image{
          asset->{
            url
          }
        }
      }
    }
  `)

  return data || null
}
