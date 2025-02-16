import React from 'react'
import { useParams } from 'react-router-dom'
const SingleProduct = () => {
    const { id } = useParams()
  return (
    <div>
        product id: { id }
    
    </div>
  )
}

export default SingleProduct