import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { fetcher } from '../../utils/fetcher'
import ListContainer from '../List'
import ListItem from '../List/ListItem'
import { NoData } from '../../GlobalStyles'
const BeerDetails = () => {
  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() => {
    if (params.id === undefined) return
    fetcher(`beers/${params.id}`)
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
        <ListItem key={idx} props={e} />
      )
    }
  </ListContainer>
  )
}

export default BeerDetails
