import React, { useState } from 'react'
import { SideNav } from './styles'
import { Link } from 'react-router-dom'
import InnerNav from './InnerNav'
import { categoryList } from '../../utils/category'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleInnerNav = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <SideNav>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {
            categoryList.map((e, idx) => {
              return <li onClick={toggleInnerNav} key={idx}>
                  <Link to={`/pages/${e.url}`}>{e.content}</Link>
                  {
                    isOpen && <InnerNav itemList={e.category} />
                  }
                </li>
            })
          }
        </ul>
      </nav>
    </SideNav>
  )
}

export default Sidebar
