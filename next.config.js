import nextra from 'nextra'
import { remarkMermaid } from '@theguild/remark-mermaid'

const withNextra = nextra({
  mdxOptions: {
    remarkPlugins: [remarkMermaid]
  }
})

// Nextra wraps Next.js config
export default withNextra({
  output: 'export', // Optional: for static exports
  images: {
    unoptimized: true
  }
})