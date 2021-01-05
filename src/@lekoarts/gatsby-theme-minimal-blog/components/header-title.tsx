/** @jsx jsx */
import { LocalizedLink } from 'gatsby-theme-i18n'
import { jsx } from 'theme-ui'
import replaceSlashes from '../utils/replaceSlashes'
import useSiteMetadata from '../hooks/use-site-metadata'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <LocalizedLink
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
        {siteTitle}
      </div>
    </LocalizedLink>
  )
}

export default HeaderTitle
