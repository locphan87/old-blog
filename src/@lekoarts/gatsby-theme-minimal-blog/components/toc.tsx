import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

const Toc = styled.ul`
  background-color: #f9f6f7;
  padding: 1.5rem;
  list-style: none;
  h2 {
    margin: 0;
  }
  li {
    line-height: 1rem;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
const renderItem = (item: any) => {
  const { url, title, items } = item
  return (
    <li key={url}>
      <a href={url} key={url}>
        {title}
      </a>
      {items && <ul>{items.map(renderItem)}</ul>}
    </li>
  )
}
const TocContainer: React.FC<any> = ({ data }) => {
  const items = R.propOr([], 'items', data)
  return (
    <>
      {items.length > 0 && (
        <Toc>
          <h2>Contents</h2>
          {items.map(renderItem)}
        </Toc>
      )}
    </>
  )
}

export { TocContainer }
