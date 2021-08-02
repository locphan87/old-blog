/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import * as R from 'ramda'

const renderSkill = (skill: any) => {
  const { name, link } = skill
  const renderName = () => {
    if (!link) return name

    return (
      <a
        href={link}
        sx={{
          variant: `links.secondary`,
          color: `primary`,
        }}
        target="_blank"
      >
        {name}
      </a>
    )
  }
  return <span className="pr-4">{renderName()}</span>
}
const renderCategory = (skills: any[]) => (category: any) => {
  const skillsByCategory = skills.filter((x) => x.category === category.slug)
  const { id, name } = category
  return (
    <div key={id} className="leading-loose">
      <h3>{name}</h3>
      <div>{skillsByCategory.map(renderSkill)}</div>
    </div>
  )
}

const Skills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSkills {
          nodes {
            id
            name
            link
            category
          }
        }
        allSkillCategories(sort: { fields: order, order: ASC }) {
          nodes {
            id
            slug
            name
            order
          }
        }
      }
    `
  )
  const categories: any[] = R.pathOr([], ['allSkillCategories', 'nodes'], data)
  const skills: any[] = R.pathOr([], ['allSkills', 'nodes'], data)

  return <>{categories.map(renderCategory(skills))}</>
}

export default Skills
