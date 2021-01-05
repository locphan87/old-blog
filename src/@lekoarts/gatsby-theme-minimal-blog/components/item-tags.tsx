import React from 'react'
import { Link as TLink } from 'theme-ui'
import { LocalizedLink } from 'gatsby-theme-i18n'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import replaceSlashes from '../utils/replaceSlashes'

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {tags
        .filter((x) => !['project', 'summary'].includes(x.slug))
        .map((tag, i) => (
          <React.Fragment key={tag.slug}>
            {!!i && `, `}
            <TLink
              as={LocalizedLink}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
            >
              {tag.name}
            </TLink>
          </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default ItemTags
