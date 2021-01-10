import { graphql } from 'gatsby'
import TagComponent from '../components/tag'

export default TagComponent

export const query = graphql`
  query($locale: String!, $slug: String!, $formatString: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: {
        fields: { locale: { eq: $locale } }
        tags: { elemMatch: { slug: { eq: $slug, nin: ["summary"] } } }
      }
    ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
