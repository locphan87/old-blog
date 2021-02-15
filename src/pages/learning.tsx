/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-minimal-blog/components/layout'
import SEO from '../@lekoarts/gatsby-theme-minimal-blog/components/seo'

export default () => {
  const title = 'My Learning'
  const description = 'My learning courses and certifications'
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>{description}</section>
    </Layout>
  )
}
