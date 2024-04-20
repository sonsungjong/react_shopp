import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

// 자바스크립트 파일은 확장자명을 생략
// 다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

// 이미지를 사용하려면 import
import 작명 from './main.png';      // 이미지 import
import { useState } from 'react';

function App() {
  let [items, setItems] = useState(data);   // data는 변수니깐 state로
  let [photo, setPhoto] = useState(['/monitor.png','/mouse.png','/keyboard.png']);   // useState import

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={'/logo192.png'} width={'50px'} height={'50px'}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={'main-bg'}></div>
      <Container>
        <Row>
          {/* data갯수와 image가 바뀔 수 있으니까 useState 처리 
            data : 변수 (사용자 입력 또는 서버로 부터 데이터를 받았을때 변경이 되어도 화면은 안바뀜 ==> useState로 변경)
          */}
          <ItemCol data={items[0]} img={photo[0]} />
          <ItemCol data={items[1]} img={photo[1]} />
          <ItemCol data={items[2]} img={photo[2]} />
        </Row>
      </Container>
    </div>
  );
}
export default App;

// 컴포넌트는 맨 앞글자는 대문자
// return에 html(jsx) 코드
// 컴포넌트로 분리를 했으면 props로 받아와야하는 부분을 변경
function ItemCol(props)
{
  // 사용하는 곳에서 결정해줘야하는 부분(그때그때 바뀌어야하는 부분)만 props 처리
  return(
    <>
      <Col>
        <img src={props.img} width={'300px'} height={'300px'}/>
        <h4>{props.data.title}</h4>
        <p>{props.data.price} 원</p>
      </Col>
    </>
  )
}