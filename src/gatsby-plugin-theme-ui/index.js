import { merge } from 'theme-ui'
import { tailwind } from '@theme-ui/presets'
import originalTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index'

const colorModes = {
  dark: {
    text: tailwind.colors.gray[4],
    primary: tailwind.colors.purple[5],
    secondary: `#7f8ea3`,
    toggleIcon: tailwind.colors.gray[4],
    background: `#1A202C`,
    heading: tailwind.colors.white,
    divide: tailwind.colors.gray[8],
    muted: tailwind.colors.gray[8],
  },
  light: {
    text: tailwind.colors.gray[8],
    primary: tailwind.colors.purple[7],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    background: tailwind.colors.white,
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    muted: tailwind.colors.gray[3],
  },
}
const theme = merge(originalTheme, {
  initialColorModeName: 'light',
  colors: {
    ...colorModes.dark,
    modes: {
      light: colorModes.light,
    },
  },
})

export default theme
