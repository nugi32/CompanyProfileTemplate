import { client } from "@/lib/client"

interface LandingPageData {
  title: string;
  subTitle: string;
  backgroundImageUrl: string | null;
}

export async function getLandingPageData(): Promise<LandingPageData> {
  const data = await client.fetch(`
    *[_type == "landingPage"][0]{
      title,
      subTitle,
      "backgroundImageUrl": backgroundImage.asset->url
    }
  `)

  if (!data) {
    return {
      title: "Default Title",
      subTitle: "Default SubTitle",
      backgroundImageUrl: null,
    }
  }

  return data
}