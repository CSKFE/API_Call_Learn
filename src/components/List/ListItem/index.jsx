import React, { memo } from 'react'
import { Lists } from './styles'
const ListItem = memo(({ title, imgUrl }) => {
  return (
    <Lists>
      <h2>{title}</h2>
      <div className="img-box">
        {
          imgUrl
            ? <img src={imgUrl} alt={`${title} - poster`} />
            : <img src='' className='no-img' alt='no-poster-image' />
        }
      </div>
    </Lists>
  )
})
ListItem.displayName = 'ListItem'

export default ListItem
