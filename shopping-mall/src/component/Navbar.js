import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [keyword, setKeyWord] = useState("");
  const navigate = useNavigate();
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성',
  ];
  const search = (event) => {
    if(event.key === "Enter") {
      //입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value
      navigate(`/?q=${keyword}`) // url을 해당 input 입력 키워드 값으로 바꿔줌
      event.target.value = "";
      
    }
  }



  return (
    <div className='nav-container'>
      <div>
        <div className="login-button">
          <Link to={'/login'} className='login-button'>
          <FontAwesomeIcon className="login-icon" icon={faUser}  />
          <div>로그인</div>
          </Link>
        </div>
      </div>
      <div className="nav-section">
      <Link to={'/'} className='login-button'>
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s"
          alt=''
        />
      </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((item) => <li>{item}</li>)}
        </ul>
        <div className='search-container'>
          <FontAwesomeIcon icon={faSearch} className="fa-search"/>
          <input 
          type="text" 
          onKeyDown={(event) => search(event)} 
          name="search" 
          placeholder="제품검색" />
          
        </div> 
      </div>
    </div>
  );// 검색창에서 enter를 입력했을 떄 이벤트 설정하는것이 onkeypress 아무키나 입력하면 호출되는 이벤트
}; // 아무글자나, alt, shift말고 enter입력시 입력되게 하려면

export default Navbar;
