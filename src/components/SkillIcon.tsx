import React from 'react'
import { useSelector } from 'react-redux'

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
  const { showIcon } = useSelector((x) => x)
  const linkStyle =
    bg && showIcon
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
      {!!C && showIcon ? (
        <C color={colors[id]} size="3rem" />
      ) : (
        <div className="p-2 text-gray-900 font-medium tracking-wide">
          {avatar}
        </div>
      )}
    </a>
  )
}

export { skillList, colors }
export default SkillIcon
