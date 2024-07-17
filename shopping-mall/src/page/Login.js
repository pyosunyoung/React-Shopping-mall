import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    // console.log("login user function issue"); // 페이지 새로고침해서 아주 잠깐 떳다 사라짐
    event.preventDefault(); //페이지 계속 새로고침되는 것 막음
    console.log("login user function issue");// 정상적으로 페이지 새로고침 x 
    //즉 form 쓸때는 이 함수를 event.preventDefault(); 써주는게 좋다
    setAuthenticate(true);
    navigate('/')
  }
  return (// 밑에 (event)=>loginUser(event) 이렇게 쓴 이유는 form에서 event 매개변수를 가져오기 위함
    <Container >
    <Form className='login-container' onSubmit={(event)=>loginUser(event)}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit" >
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login

// 로그인 요청을 백엔드로 보내서 거기서 id 비번 같은지 검사하는것
//form은 입력받은 정보를 백엔드에 보내고 싶을 때 사용됨
// 지금 로그인 버튼을 클릭하면 페이지가 새로고침됨 여기서 이벤트는
// onclick이아니라 onSubmit이벤트임 현재 button type이 submit으로 되어있어서 그럼