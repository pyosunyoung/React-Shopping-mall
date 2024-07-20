import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        <div>
          <FontAwesomeIcon
            className="burger-menu"
            icon={faBars}
            onClick={() => setWidth(250)}
          />
        </div>
        <div className="login-section">
          {authenticate ? (
            <div className="navbar-container">
              <div className="button-group">
                <div className="login-button" onClick={goToLogout}>
                  <FontAwesomeIcon className="login-icon" icon={faUser} />
                  <div>로그아웃</div>
                </div>
                <div
                  className="search-button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FontAwesomeIcon icon={faSearch} className="login-icon" />
                </div>
                <div className="like-button">
                  <FaRegHeart className="login-icon" />
                  <div>좋아요</div>
                </div>
                <div className="shopping-basket-button">
                  <MdOutlineShoppingBag className="login-icon" />
                  <div>장바구니</div>
                </div>
              </div>
              {isSearchOpen && (
                <div className="dropdown-search-container">
                  <input
                    type="text"
                    onKeyDown={(event) => search(event)}
                    name="search"
                    placeholder="제품검색"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="navbar-container">
              <div className="button-group">
                <div className="login-button" onClick={goToLogin}>
                  <FontAwesomeIcon className="login-icon" icon={faUser} />
                  <div>로그인</div>
                </div>
                <div
                  className="search-button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FontAwesomeIcon icon={faSearch} className="login-icon" />
                </div>
                <div className="like-button">
                  <FaRegHeart className="login-icon" />
                  <div>좋아요</div>
                </div>
                <div className="shopping-basket-button">
                  <MdOutlineShoppingBag className="login-icon" />
                  <div>장바구니</div>
                </div>
              </div>
              {isSearchOpen && (
                <div className="dropdown-search-container">
                  <input
                    type="text"
                    onKeyDown={(event) => search(event)}
                    name="search"
                    placeholder="제품검색"
                  />
                </div>
              )}
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
              <a href='#'><li key={index}>{item}</li></a>
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
