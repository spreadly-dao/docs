import nextra from 'nextra'

const withNextra = nextra({

})

export default withNextra({
  output: 'export', // Optional: for static exports
  images: {
    unoptimized: true
  }
})