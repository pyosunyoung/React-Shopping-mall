import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // 좋아요 아이콘 추가

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false); // 좋아요 상태 관리

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  const toggleLike = (e) => {
    e.stopPropagation(); // 부모 요소의 onClick 이벤트가 실행되지 않도록 함
    setLiked(!liked);
  };

  return (
    <div className='card-container' onClick={showDetail}>
      <div className="img-wrapper">
        <img className='card-img' width='310px' src={item?.img} alt=''/>
        <div className="img-like-button" onClick={toggleLike}>
          {liked ? <FaHeart className="liked" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="product-cardChoice">{item?.choice === true ? "Concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div> \ {item?.price}</div>
      <div className='product-new'>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;