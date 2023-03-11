import React from 'react'
import { ListBox } from './styles'
const ListContainer = ({ children }) => {
  return (
    <ListBox>
      {children}
    </ListBox>
  )
}

export default ListContainer
