import { client } from "@/lib/client"

interface TeamMember {
  name: string;
  role: string;
  pict: {
    asset: {
      url: string
    }
  }
}

interface WhyChoose {
  title: string;
  content: string;
}

interface AboutData {
  subTitle: string;
  teams: TeamMember[];
  misionText: string;
  visionText: string;
  ilustration: {
    asset: {
      url: string
    }
  };
  whyChooseUs: WhyChoose[];
}

export async function getAboutData(): Promise<AboutData | null> {
  const data = await client.fetch(`
    *[_type == "about"][0]{
      subTitle,
      teams[]{
        name,
        role,
        pict{
          asset->{
            url
          }
        }
      },
      misionText,
      visionText,
      ilustration{
        asset->{
          url
        }
      },
      whyChooseUs
    }
  `)

  return data || null
}