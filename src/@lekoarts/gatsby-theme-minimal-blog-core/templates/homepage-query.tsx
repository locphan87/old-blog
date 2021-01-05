import { graphql } from 'gatsby'
import HomepageComponent from '../components/homepage'

export default HomepageComponent

export const query = graphql`
  query($locale: String!, $formatString: String!) {
    allPost(
      filter: {
        display: { ne: HIDDEN }
        fields: { locale: { eq: $locale } }
        tags: { elemMatch: { slug: { nin: ["project", "summary"] } } }
      }
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
