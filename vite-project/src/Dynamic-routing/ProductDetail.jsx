import React from 'react'
import { useParams } from 'react-router-dom'
import { FaChildCombatant } from "react-icons/fa6";


const ProductDetail = () => {
    const {id} = useParams();
  return (
    <div>
      <h2><FaChildCombatant />
                              Product id: {id} </h2>
    </div>
  )
}

export default ProductDetail
