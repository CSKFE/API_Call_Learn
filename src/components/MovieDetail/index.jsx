import React, { useState, useEffect } from 'react'
import ListContainer from '../../components/List/index'
import ListItem from '../../components/List/ListItem'
import { useParams } from 'react-router'
import { fetcher } from '../../utils/fetcher'
import { NoData } from '../../GlobalStyles'
const MovieDetails = () => {
  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() => {
    if (params.id === undefined) return
    fetcher(`movies/${params.id}`)
      .then(res => setData(JSON.parse(res)))
      .catch(error => console.dir(error))

    return () => {
      setData([])
    }
  }, [params.id])

  console.log(data)
  if (!data || params.id === undefined) return <NoData>영화 정보가 없습니다.</NoData>
  return (
    <ListContainer>
    {
      data.map((e, idx) =>
        <ListItem key={idx} title={e.title} imgUrl={e.posterURL} />
      )
    }
  </ListContainer>
  )
}

export default MovieDetails
