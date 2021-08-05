/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-minimal-blog/components/layout'
import SEO from '../@lekoarts/gatsby-theme-minimal-blog/components/seo'

const Page404: React.FC<any> = ({ text }) => {
  const title = '404 Page Not Found'
  const description = '404 Page Not Found'
  const reason =
    text || 'Oops! The page you are looking for has been removed or relocated.'
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>{reason}</section>
    </Layout>
  )
}

export default Page404
