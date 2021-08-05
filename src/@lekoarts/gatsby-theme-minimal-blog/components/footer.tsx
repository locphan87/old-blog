/** @jsx jsx */
import { jsx, Link as TLink } from 'theme-ui'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { useLocalization } from 'gatsby-theme-i18n'
import useSiteMetadata from '../hooks/use-site-metadata'

const Footer = () => {
  const { siteTitle } = useSiteMetadata()
  const { locale } = useLocalization()
  const { pathname } = useLocation()
  const langData = {
    vi: ['English', '/', () => pathname.replace('/vi/', '/')],
    en: ['Vietnamese', '/vi', () => pathname.replace('/', '/vi/')],
  }
  const [langTitle, , langPath] = langData[locale]

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `center`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
        <TLink className="ml-2" as={Link} to={langPath()}>
          {langTitle}
        </TLink>{' '}
      </div>
    </footer>
  )
}

export default Footer
