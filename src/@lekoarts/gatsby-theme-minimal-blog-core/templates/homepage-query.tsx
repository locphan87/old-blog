import { graphql } from 'gatsby'
import HomepageComponent from '../components/homepage'

export default HomepageComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(
      filter: { display: { ne: HIDDEN } }
      sort: { fields: date, order: DESC }
      limit: 5
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
