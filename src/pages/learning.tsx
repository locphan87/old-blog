/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { graphql } from 'gatsby'
import * as R from 'ramda'

import Layout from '../@lekoarts/gatsby-theme-minimal-blog/components/layout'
import SEO from '../@lekoarts/gatsby-theme-minimal-blog/components/seo'

export const query = graphql`
  query {
    allMaterials {
      edges {
        node {
          id
          title
          description
          image
          sourceId
          duration
          authors
          link
          updated
          type
          status
          completed
          certificate
        }
      }
    }
  }
`

const renderItem = (item) => {
  const length = 80
  const trimmedDesc =
    item.description.length > length
      ? item.description.substring(0, length - 3) + '...'
      : item.description
  return (
    <article
      key={item.id}
      className="p-4 shadow-lg border border-dotted border-gray-600"
    >
      <header className="flex justify-between text-sm">
        <div className="flex">
          <div className="text-white bg-blue-600 px-2">{item.sourceId}</div>
          <div className="ml-2 text-white bg-gray-600 px-2">{item.type}</div>
        </div>
        <div>{item.updated}</div>
      </header>
      {item.image && (
        <div className="pt-2 text-center">
          <img className="max-w-full max-h-24" src={item.image} />
        </div>
      )}
      <div className="py-2">
        <a href={item.link} target="_blank">
          {item.title}
        </a>
        <div className="text-sm" title={item.description}>
          {trimmedDesc}
        </div>
      </div>
      <div className="flex pb-2 justify-between text-sm text-green-600">
        <div className="">{item.authors}</div>
        <div>{item.duration}</div>
      </div>
      <div className="flex justify-between text-sm text-red-600">
        <div className="">
          {item.status.toUpperCase()}
          {item.completed && <span> ({item.completed})</span>}
        </div>
        {item.certificate && (
          <div>
            <a href={item.certificate} target="_blank">
              Certification
            </a>
          </div>
        )}
      </div>
      <footer></footer>
    </article>
  )
}

export default ({ data }) => {
  const nodes = R.pathOr([], ['allMaterials', 'edges'], data)
  if (!nodes.length) return null
  const title = 'My Learning'
  const description = 'Learning materials and certifications'
  const materials = nodes.reduce((acc, x) => {
    const item = x.node
    acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
    return acc
  }, {})

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>{description}</section>
      {['new', 'in_progress', 'done'].map((k) => (
        <div>
          <h2>
            {k.toUpperCase()} ({materials[k].length})
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {materials[k].map(renderItem)}
          </div>
        </div>
      ))}
    </Layout>
  )
}
