import { graphql } from 'gatsby'
import PageComponent from '../components/page'

export default PageComponent

export const query = graphql`
  query($locale: String!, $slug: String!) {
    page(slug: { eq: $slug }, fields: { locale: { eq: $locale } }) {
      title
      slug
      excerpt
      body
    }
  }
`
