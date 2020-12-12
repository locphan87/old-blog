/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from './layout'
import ItemTags from './item-tags'
import SEO from './seo'
import { Toc } from './toc'

type PostProps = {
  data: {
    mdx: {
      slug: string
      tableOfContents?: any
    }
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)
const renderItem = (item: any) => {
  const { url, title, items } = item
  return (
    <li key={url}>
      <a href={url} key={url}>
        {title}
      </a>
      {items && <ul>{items.map(renderItem)}</ul>}
    </li>
  )
}

const Post = ({ data: { post, mdx } }: PostProps) => {
  const bannerSrc = post.banner
    ? post.banner.childImageSharp.resize.src
    : undefined
  const { tableOfContents } = mdx || {}
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={bannerSrc}
        pathname={post.slug}
        canonicalUrl={post.canonicalUrl}
      />
      <Heading as="h1" variant="styles.h1">
        {post.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </p>
      <section
        sx={{
          my: 5,
          '.gatsby-resp-image-wrapper': {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
          variant: `layout.content`,
        }}
      >
        {tableOfContents && tableOfContents.items && (
          <Toc>
            <h2>Contents</h2>
            {tableOfContents.items.map(renderItem)}
          </Toc>
        )}
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export default Post
