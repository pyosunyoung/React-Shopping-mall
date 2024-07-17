import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s"
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((item) => <li>{item}</li>)}
        </ul>
        <div className='search-container'>
          <FontAwesomeIcon icon={faSearch} className="fa-search"/>
          <input type="text" name="search" placeholder="제품검색"/>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
