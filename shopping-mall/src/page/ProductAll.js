import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productList,setProductList] = useState([]); // 보여주는 ui는 useState
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q') || ""; 
    console.log("쿼리값은?", searchQuery)
    let url = `https://my-json-server.typicode.com/pyosunyoung/React-Shopping-mall/products?q=${searchQuery}` // 모든 데이터 가져옴
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=> { // api가져오는건 useEffect 사용
    getProducts()
  },[query]) // query값이 바뀔 때 api 재호출한다. 이렇게 안하면 searchquery해도 소용없음 
  // 빈 배열은 api를 한번만 호출하고 그이후엔 호출 안하기 때문, 그래서 query값 즉 url주소값이 바뀔 떄 마다 재호출 해주는 것


  return (
    <div>
    
      <Container>
        
        <Row>
        
        {productList.map(menu =><Col lg={3}><ProductCard item={menu}/></Col> )}
        
        </Row>
      </Container>
      
      
    </div>
  )
}

export default ProductAll


// json-server 시작 명령어
// 리액트 npm start가 된 상태에서 새터미널 만들고 실행해야함
// npx json-server --watch db.json --port 5000
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

  ////////////////////////////////////////////////////////////////////////
  //<Container>는 부트스트랩에서 아이템이 가운데 정렬되어지게 보여주는 역할
  // 적당한 중앙 정렬되어지게 이미지 간격도 설정됨
  // row는 줄 테이블 느낌 알지?
