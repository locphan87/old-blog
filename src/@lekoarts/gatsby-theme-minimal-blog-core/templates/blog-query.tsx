import { graphql } from 'gatsby'
import BlogComponent from '../components/blog'

export default BlogComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(
      filter: {
        display: { ne: HIDDEN }
        tags: { elemMatch: { slug: { nin: ["project", "summary"] } } }
      }
      sort: { fields: date, order: DESC }
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
