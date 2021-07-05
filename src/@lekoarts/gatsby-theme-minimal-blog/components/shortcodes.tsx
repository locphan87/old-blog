import * as AllIcons from 'react-icons/all'

import Experiences from '../../../components/Experiences'
import ResumeSetting from '../../../components/ResumeSetting'
import SkillIcon from '../../../components/SkillIcon'
import SkillIcons from '../../../components/SkillIcons'
import TextIcon from '../../../components/TextIcon'
import SkillLink from '../../../components/SkillLink'
import LinkTab from '../../../components/LinkTab'

const Icons = ({ name, ...rest }) => {
  const C = AllIcons[name]
  if (!C) return null
  return <C size="1rem" {...rest} />
}
const shortcodes = {
  Icons,
  LinkTab,
  SkillLink,
  SkillIcon,
  SkillIcons,
  ResumeSetting,
  TextIcon,
  Experiences,
}

export default shortcodes
