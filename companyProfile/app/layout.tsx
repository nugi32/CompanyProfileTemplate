import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { getCompanyLogo } from "@/fetchData/CompanyLogo";
import { getFooterData } from "@/fetchData/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const logo = await getCompanyLogo();
const footer = await getFooterData();

  return (
<html lang="en" suppressHydrationWarning>
  <body className="min-h-screen flex flex-col">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
       <Header logo={logo} />

      <main className="flex-1">
        {children}
      </main>

{footer ? (
  <Footer
    company={footer.company}
    productServices={footer.productServices}
    contact={footer.contact}
    socialMedia={footer.socialMedia}
    copyright={footer.copyrigth}
  />
) : null}
    </ThemeProvider>
  </body>
</html>
  )
}

