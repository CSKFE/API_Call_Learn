import React from 'react'
import { Routes, Route } from 'react-router'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Movies from '../Movie'
import { Content } from './styles'
const Contents = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <Routes>
          <Route path='/pages/movie' element={<Movies />}/>
        </Routes>
      </Content>
    </>
  )
}

export default Contents
