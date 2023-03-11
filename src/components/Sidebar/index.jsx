import React from 'react'
import { SideNav } from './styles'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <SideNav>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pages/movie'>Movie</Link>
            <ul>
              <li>
                <Link to='/pages/movie/actionAdventure'>Action Adventure</Link>
              </li>
              <li>
                <Link to='/pages/movie/animation'>Animation</Link>
              </li>
              <li>
                <Link to='/pages/movie/classic'>Classic</Link>
              </li>
              <li>
                <Link to='/pages/movie/comedy'>Comedy</Link>
              </li>
              <li>
                <Link to='/pages/movie/drama'>Drama</Link>
              </li>
              <li>
                <Link to='/pages/movie/horror'>Horror</Link>
              </li>
              <li>
                <Link to='/pages/movie/family'>Family</Link>
              </li>
              <li>
                <Link to='/pages/movie/mystrey'>Mystery</Link>
              </li>
              <li>
                <Link to='/pages/movie/scifiFantasy'>Scifi Fantasy</Link>
              </li>
              <li>
                <Link to='/pages/movie/western'>Western</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SideNav>
  )
}

export default Sidebar
