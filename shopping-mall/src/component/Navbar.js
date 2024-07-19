import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
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
  const [width, setWidth] = useState(0);

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      event.target.value = '';
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToLogout = () => {
    setAuthenticate(false);
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-container">
        <div >
          <FontAwesomeIcon className="burger-menu" icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div> 
          
          {authenticate ? (

            <div className="login-button" onClick={goToLogout}>
              <FontAwesomeIcon className="login-icon" icon={faUser} />
              <div>로그아웃</div>
            </div>
            
          ) : (
            
            <div className="login-button" onClick={goToLogin}>
              <FontAwesomeIcon className="login-icon" icon={faUser} />
              <div>로그인</div>
            </div>
            
          )}
        </div>
        <div className="nav-section">
          <Link to={'/'} className="login-button">
            <img
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s"
              alt=""
            />
          </Link>
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="fa-search" />
            <input
              type="text"
              onKeyDown={(event) => search(event)}
              name="search"
              placeholder="제품검색"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
