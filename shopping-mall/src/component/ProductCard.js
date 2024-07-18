import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='card-container' onClick={showDetail}>
      
      <img className='card-img' width='310px' src={item?.img}/>
      <div className="product-cardChoice">{item?.choice === true ? "Concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div> \ {item?.price}</div>
      <div className='product-new'>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
