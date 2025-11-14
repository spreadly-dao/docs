import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Metadata } from 'next'
import Image from 'next/image';
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

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
          height={30}
          width={30}
          priority
        />        
        <span style={{
          marginLeft: 15,
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(45deg, var(--primary-light), var(--primary-dark))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Spreadly</span>
      </>
    )}
  />
)
const footer = <Footer>
  <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <p style={{textAlign: 'center'}}>Spreadly, bringing Wall Street to Sneaker Culture</p>

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
      className={spaceGrotesk.variable}
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