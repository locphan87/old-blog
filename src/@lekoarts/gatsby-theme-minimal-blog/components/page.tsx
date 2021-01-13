/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'
import { TocContainer } from './toc'
import SEO from './seo'

type PageProps = {
  data: {
    mdx: {
      slug: string
      tableOfContents?: any
    }
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page, mdx } }: PageProps) => {
  const { tableOfContents } = mdx || {}
  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} />
      <Heading as="h1" variant="styles.h1">
        {page.title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>
        <TocContainer data={tableOfContents} />
        <MDXRenderer>{page.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export default Page
