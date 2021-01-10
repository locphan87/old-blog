import { graphql } from 'gatsby'
import TagsComponent from '../components/tags'

export default TagsComponent

export const query = graphql`
  query($locale: String!) {
    allPost(
      sort: { fields: tags___name, order: DESC }
      filter: {
        fields: { locale: { eq: $locale } }
        tags: { elemMatch: { slug: { nin: ["summary"] } } }
      }
    ) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`
