import React from 'react'
import { Routes, Route } from 'react-router'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Movies from '../Movie'
import { Content } from './styles'
import MovieDetails from '../../components/MovieDetail/index'
import Beers from '../Beer/index'
import BeerDetails from '../../components/BeerDetail/index'
const Contents = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <Routes>
          <Route path='/pages/movie' element={<Movies />}>
            <Route path=':id' element={<MovieDetails />} />
          </Route>
          <Route path='/pages/beer' element={<Beers />}>
            <Route path=':id' element={<BeerDetails />} />
          </Route>
        </Routes>
      </Content>
    </>
  )
}

export default Contents
