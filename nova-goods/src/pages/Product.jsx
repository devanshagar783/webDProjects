import React from 'react'
import { useParams } from 'react-router-dom'

const Product = (params) => {

    const { id } = useParams()

  return (
    <div>Product page {id}</div>
  )
}

export default Product