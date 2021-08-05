/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import * as R from 'ramda'
import { Event } from '@material-ui/icons'

import Layout from '../@lekoarts/gatsby-theme-minimal-blog/components/layout'
import SEO from '../@lekoarts/gatsby-theme-minimal-blog/components/seo'

export const query = graphql`
  query {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { in: ["project"] } } } }
    ) {
      nodes {
        id
        title
        description
        slug
        date(formatString: "MM/YYYY")
        banner {
          childImageSharp {
            resize(width: 420, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`

const renderItem = (item) => {
  const bannerSrc = R.pathOr(
    '',
    ['banner', 'childImageSharp', 'resize', 'src'],
    item
  )
  return (
    <article
      key={item.id}
      className="p-4 shadow-lg border border-solid rounded-md border-gray-400"
    >
      <header className="flex flex-col h-full justify-center">
        <div>
          <img
            src={bannerSrc}
            className="w-full h-auto"
            width="420"
            height="220"
          />
        </div>
        <div className="mt-2">
          <div className="flex justify-between">
            <div className="text-xl">
              <Link to={item.slug}>{item.title}</Link>
            </div>
            <div className="flex justify-center">
              <Event /> <span className="ml-2">{item.date}</span>
            </div>
          </div>
          <div className="mt-4">{item.description}</div>
        </div>
      </header>
    </article>
  )
}

export default ({ data }) => {
  const nodes = R.pathOr([], ['allPost', 'nodes'], data)
  if (!nodes.length) return null
  const title = 'Portfolio'
  const description = 'My Projects: Web and Mobile Applications'

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>{description}</section>
      <div>
        <h2>Projects ({nodes.length})</h2>
        <div className="grid grid-cols-2 gap-4">{nodes.map(renderItem)}</div>
      </div>
    </Layout>
  )
}
