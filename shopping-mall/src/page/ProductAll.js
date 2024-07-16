import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [products,setProductList] = useState([]); // 보여주는 ui는 useState

  const getProducts = async() => {
    let url = `http://localhost:5000/products` // 모든 데이터 가져옴
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=> { // api가져오는건 useEffect 사용
    getProducts()
  })

  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll


// json-server 시작 명령어
// 리액트 npm start가 된 상태에서 새터미널 만들고 실행해야함
//json-server --watch db.json --port 5000
//json-server --watch db.json --port 4000
// http://localhost:5000/products // json파일 형성됨
// http://localhost:5000/products/2 // json파일에서 id가 2인 것만 추출
// 데이터 삽입시킴
// {
//   "posts": [
//     { "id": "1", "title": "a title", "views": 100 },
//     { "id": "2", "title": "another title", "views": 200 }
//   ],
//   "comments": [
//     { "id": "1", "text": "a comment about post 1", "postId": "1" },
//     { "id": "2", "text": "another comment about post 1", "postId": "1" }
//   ],
//   "profile": {
//     "name": "typicode"
//   }
// }
// 이 서버에서 데이터를 가져올 수 있을까?
// GET    /posts     => 전체 데이터 가져옴 comment가져오려면 /comments 하면됨
// GET    /posts/:id => 
// POST   /posts     =>
// PUT    /posts/:id =>
// PATCH  /posts/:id =>
// DELETE /posts/:id =>