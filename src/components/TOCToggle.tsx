import React from 'react'
import Fab from '@material-ui/core/Fab'
import { FiList } from 'react-icons/Fi'

const TOCToggle: React.FC = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <Fab size="medium" onClick={onClick}>
        <FiList size="1.5rem" />
      </Fab>
    </div>
  )
}

export default TOCToggle
