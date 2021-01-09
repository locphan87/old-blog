import React from 'react'
import { SkillBars } from 'react-skills'

import { Skill, SkillCategory, Level, SkillColor } from '../types'
import { skillList } from './SkillIcon'

interface IProps {
  category: SkillCategory
}
interface SkillBar {
  name: string
  level: Level
  color: string
}

const findLevelName = (level: Level): string => {
  return Object.keys(Level).find((x) => {
    return Level[x] === level
  })
}
const findSkills = (category: SkillCategory): SkillBar[] => {
  return (
    skillList
      // .filter((x: Skill) => x.category === category)
      .filter((x: Skill) => !!x.level)
      .map(
        (x: Skill): SkillBar => {
          const levelName = findLevelName(x.level)
          const color = SkillColor[levelName]
          return {
            name: x.name,
            level: x.level,
            color,
          }
        }
      )
  )
}
const Skills: React.FC<IProps> = ({ category }) => {
  const skills = findSkills(category)
  return (
    <div>
      <SkillBars skills={skills} />
    </div>
  )
}

export default Skills
