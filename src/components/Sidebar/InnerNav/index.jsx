import React from 'react'
import { Link } from 'react-router-dom'
import { InnerNavs } from './styles'
const InnerNav = ({ itemList }) => {
  console.log(itemList)
  return (
    <InnerNavs>
      <ul>
        {itemList.map((e, idx) => {
          return <li key={idx}><Link to={`pages/movie/${e.url}`}>{e.content}</Link></li>
        })}
      </ul>
    </InnerNavs>
  )
}

export default InnerNav
