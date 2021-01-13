import { graphql } from 'gatsby'
import PageComponent from '../components/page'

export default PageComponent

export const query = graphql`
  query($locale: String!, $id: String!, $slug: String!) {
    mdx(children: { elemMatch: { id: { eq: $id } } }) {
      slug
      tableOfContents(maxDepth: 3)
    }
    page(slug: { eq: $slug }, fields: { locale: { eq: $locale } }) {
      title
      slug
      excerpt
      body
    }
  }
`
