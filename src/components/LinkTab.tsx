import React from 'react'

interface IProps {
  href: string
}

const LinkTab: React.FC<IProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  )
}

export default LinkTab
