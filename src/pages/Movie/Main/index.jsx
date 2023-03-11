import React, { useEffect, useState } from 'react'
import ListContainer from '../../../components/List/index'
import ListItem from '../../../components/List/ListItem'
import Box from '../../../components/Box/index'

const fetchingData = () => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.addEventListener('load', () => {
      if (req.readyState === 4) {
        resolve(req.response)
      } else {
        reject(new Error({ status: req.status, statusText: req.statusText }))
      }
    })
    req.open('GET', 'https://api.sampleapis.com/movies/animation', true)
    req.send()
  })
}

const Movies = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchingData()
      .then(res => setData(JSON.parse(res)))
      .catch(error => console.dir(error))
    return () => {}
  }, [])
  if (!data) return null
  console.log(data)
  return (
    <Box>
      <ListContainer>
        {
          data.map((e, idx) =>
            <ListItem key={idx} title={e.title} imgUrl={e.posterURL} />
          )
        }
      </ListContainer>
    </Box>
  )
}

export default Movies
