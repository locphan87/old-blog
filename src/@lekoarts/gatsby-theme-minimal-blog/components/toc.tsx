import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useOnClickOutside from 'use-onclickoutside'

import TOCToggle from '../../../components/TOCToggle'

const Toc = styled.ul`
  max-height: 75vh;
  background-color: #f9f6f7;
  list-style: none;
  li {
    line-height: 1rem;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
const renderItem = (item: any, onClick: any) => {
  const { url, title, items } = item
  return (
    <li key={url}>
      <a href={url} key={url} onClick={onClick}>
        {title}
      </a>
      {items && <ul>{items.map((item) => renderItem(item, onClick))}</ul>}
    </li>
  )
}
const TocContainer: React.FC<any> = ({ data }) => {
  const ref = React.useRef(null)
  const [showTOC, updateShowTOC] = React.useState(false)
  const items = R.propOr([], 'items', data)
  const openTOC = () => {
    updateShowTOC(true)
  }
  const closeTOC = () => {
    updateShowTOC(false)
  }
  useOnClickOutside(ref, closeTOC)
  return (
    <>
      {items.length > 0 && (
        <div>
          <TOCToggle onClick={openTOC} />
          {showTOC && (
            <Toc
              className="p-4 overflow-scroll z-50 fixed bottom-16 right-4"
              ref={ref}
            >
              <h3 className="m-0 leading-none">Contents</h3>
              {items.map((item) => renderItem(item, closeTOC))}
            </Toc>
          )}
        </div>
      )}
    </>
  )
}

export { TocContainer }
