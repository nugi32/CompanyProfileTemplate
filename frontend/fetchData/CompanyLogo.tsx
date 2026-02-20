import { client } from "@/lib/client"

export async function getCompanyLogo(): Promise<string | null> {
  const data = await client.fetch(`
    *[_type == "companyLogo"][0]{
      "logoUrl": logo.asset->url
    }
  `)

  return data?.logoUrl || null
}