import React from 'react'
import { Lists } from './styles'
const ListItem = ({ title, imgUrl }) => {
  return (
    <Lists>
      <h2>{title}</h2>
      <div className="img-box">
        <img src={imgUrl} alt={`${title} - poster`} />
      </div>
    </Lists>
  )
}

export default ListItem
