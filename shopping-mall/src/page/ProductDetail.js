import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductDetail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/pyosunyoung/React-Shopping-mall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setDetail(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={detail?.img} alt={detail?.title}/>
        </Col>
        <Col className='product-details'>
          <div className="product-title">{detail?.title}</div>
          <div className="product-price">\ {detail?.price}</div>
          <div className="product-choice">{detail?.choice === true ? "Concious choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">X</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className="add-to-cart-button"><MdOutlineShoppingBag /> 추가</button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
