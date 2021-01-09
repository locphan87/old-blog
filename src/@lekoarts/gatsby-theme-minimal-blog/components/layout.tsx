/** @jsx jsx */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
import { Box, Container, jsx } from 'theme-ui'
import 'typeface-ibm-plex-sans'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import CodeStyles from '../styles/code'
import SkipNavLink from './skip-nav'
import Experiences from '../../../components/Experiences'
import SkillIcon from '../../../components/SkillIcon'
import SkillIcons from '../../../components/SkillIcons'
import SkillBars from '../../../components/SkillBars'
import TextIcon from '../../../components/TextIcon'
import SkillLink from '../../../components/SkillLink'

type LayoutProps = { children: React.ReactNode; className?: string }

const shortcodes = {
  SkillLink,
  SkillBars,
  SkillIcon,
  SkillIcons,
  TextIcon,
  Experiences,
}
const MDX = ({ children }) => {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}
const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        <MDX>{children}</MDX>
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export { MDX }
export default Layout
