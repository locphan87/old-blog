import React from 'react'
import Avatar from '@material-ui/core/Avatar'

import skillList from '../fixtures/skills'
import links from '../fixtures/links'
import { Tech } from '../types'

interface IProps {
  id: Tech
}

const findSkill = (id: Tech) => {
  return skillList.find((x) => x.id === id)
}
const colors = skillList.reduce((acc, x) => {
  if (x.color) {
    acc[x.id] = x.color
  }
  return acc
}, {})

const SkillIcon: React.FC<IProps> = ({ id }) => {
  const { component: C, name, bg, color, avatar = name } = findSkill(id) || {}
  const link = links[id]
  const className = {
    color,
  }
  const linkStyle = bg
    ? {
        backgroundColor: bg,
      }
    : {}

  if (!link) {
    return <span>{name}</span>
  }

  return (
    <a
      className="flex no-underline mr-4 mb-2"
      title={name}
      href={link}
      target="_blank"
      style={linkStyle}
    >
      {!!C ? (
        <C color={colors[id]} size="3rem" />
      ) : (
        <Avatar variant="square" className={className}>
          {avatar}
        </Avatar>
      )}
    </a>
  )
}

export { skillList, colors }
export default SkillIcon
