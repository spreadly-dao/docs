import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Metadata } from 'next'
import Image from 'next/image';
import './globals.css' 

export const metadata: Metadata  = {
  title: 'Spreadly Docs',
  description: ''
}
 
const navbar = (
  <Navbar
    logo={(
      <>
        <Image
          src="/spreadly.png"
          alt="Logo"
          height={20}
          width={20}
          priority
        />        
        <span style={{marginLeft: 15, fontWeight: 500}}>Spreadly</span>
      </>
    )}
  />
)
const footer = <Footer>
  <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <p style={{textAlign: 'center'}}>Spreadly, a public good for Sui.</p>

  </div>
</Footer> 

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          feedback={{content: null}}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}