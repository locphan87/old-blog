import { graphql } from "gatsby";
import HomepageComponent from "../../gatsby-theme-minimal-blog/components/homepage";

export default HomepageComponent;

export const query = graphql`
  query($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
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
`;
