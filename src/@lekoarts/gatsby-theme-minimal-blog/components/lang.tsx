/** @jsx jsx */
import React from 'react'
import { jsx, Link as TLink } from 'theme-ui'
import { useLocation } from '@reach/router'
import { useLocalization } from 'gatsby-theme-i18n'

const LanguageSwitcher = () => {
  const { locale } = useLocalization()
  const { pathname } = useLocation()
  const langData = {
    vi: ['English', '/', () => pathname.replace('/vi/', '/')],
    en: ['Vietnamese', '/vi', () => pathname.replace('/', '/vi/')],
  }
  const [langTitle, , langPath] = langData[locale]

  return (
    <React.Fragment>
      <div sx={{ 'a:not(:first-of-type)': { ml: 3 }, fontSize: [1, `18px`] }}>
        <TLink className="" href={langPath()}>
          {langTitle}
        </TLink>{' '}
      </div>
    </React.Fragment>
  )
}

export default LanguageSwitcher
