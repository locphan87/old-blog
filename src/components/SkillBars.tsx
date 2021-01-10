import React from 'react'
import { SkillBars } from 'react-skills'
import { useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

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
const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
const findSkills = (category: SkillCategory): SkillBar[] => {
  return skillList
    .filter((x: Skill) => {
      return x.category === category && !!x.level
    })
    .map(
      (x: Skill): SkillBar => {
        // const levelName = findLevelName(x.level)
        // const color = SkillColor[levelName]
        const color = getRandomColor()
        return {
          name: x.name,
          level: x.level,
          color,
        }
      }
    )
}
const TabPanel = (props) => {
  const { children, value, index } = props

  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}
const categories = Object.keys(SkillCategory)
const renderSkills = (category: SkillCategory): React.FC => {
  const skills = findSkills(category)
  return (
    <SkillBars
      labelsWidth={120}
      flat={true}
      duration={1}
      levelProgress={true}
      skills={skills}
    />
  )
}
const Skills: React.FC<IProps> = ({ category }) => {
  const { showLevel } = useSelector((x) => x)
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  if (!showLevel) return null
  return (
    <div className="mt-4">
      <AppBar position="static">
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((key) => (
            <Tab label={SkillCategory[key]} />
          ))}
        </Tabs>
      </AppBar>
      {categories.map((category, index) => (
        <TabPanel key={category} value={value} index={index}>
          {renderSkills(SkillCategory[category])}
        </TabPanel>
      ))}
    </div>
  )
}

export default Skills
