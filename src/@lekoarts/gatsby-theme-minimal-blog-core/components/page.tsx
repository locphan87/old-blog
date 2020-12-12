import React from 'react'
import Page from '../../gatsby-theme-minimal-blog/components/page'

type Props = {
  data: {
    page: any
    [key: string]: any
  }
  [key: string]: any
}

export default function MinimalBlogCorePage({ ...props }: Props) {
  return <Page {...props} />
}
