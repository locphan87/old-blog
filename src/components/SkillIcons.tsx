import React from 'react'

import { Tech, Skill, SkillCategory, SkillColor } from '../types'
import SkillIcon, { skillList } from './SkillIcon'

interface IProps {
  category: SkillCategory
}

const findIcons = (category: SkillCategory): Skill[] => {
  return skillList.filter((x: Skill) => x.category === category)
}
const Icons: React.FC<IProps> = ({ category }) => {
  const icons = findIcons(category)
  return (
    <div className="flex flex-wrap mt-4 items-center">
      {icons.map(({ id }) => (
        <SkillIcon key={id} id={id} />
      ))}
    </div>
  )
}

export default Icons
