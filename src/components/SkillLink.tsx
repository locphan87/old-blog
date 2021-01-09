/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Tech } from '../types'
import links from '../fixtures/links'
import { skillList } from './SkillIcon'

interface IProps {
  id: Tech
}

const findName = (id: Tech): string => {
  const skill = skillList.find((x) => x.id === id)
  return skill && skill.name
}
const SkillLink: React.FC<IProps> = ({ id }) => {
  const link = links[id]
  const name = findName(id) || id
  if (!link) return <div>{name}</div>
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

export default SkillLink
