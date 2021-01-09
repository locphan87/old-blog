import React from 'react'
import { useColorMode } from 'theme-ui'
import styled from 'styled-components'

interface WrapperProps {
  theme: string
}

const IconWrapper = styled.div`
  display: inline-block;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0.5rem;
  font-site: 1.25;
  font-weight: 600;
  background-color: ${(props: WrapperProps) => {
    return props.theme === 'light' ? 'grey' : 'white'
  }};
  color: ${(props: WrapperProps) => {
    return props.theme === 'light' ? 'white' : 'grey'
  }};
`

const TextIcon: React.FC = ({ children }) => {
  const [colorMode] = useColorMode()
  return (
    <>
      <IconWrapper theme={colorMode}>{children}</IconWrapper>
    </>
  )
}

export default TextIcon
