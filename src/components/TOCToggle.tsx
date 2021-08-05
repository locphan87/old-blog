import React from 'react'
import Fab from '@material-ui/core/Fab'
import ListIcon from '@material-ui/icons/List'

const TOCToggle: React.FC<any> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <Fab size="medium" onClick={onClick}>
        <ListIcon />
      </Fab>
    </div>
  )
}

export default TOCToggle
