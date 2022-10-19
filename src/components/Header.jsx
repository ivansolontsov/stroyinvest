import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="content">
      <div className="header__content-wrapper">
        <div className="header__left-side">
          <div className="header__logo">
            <NavLink to="/">СТРОЙИНВЕСТ-С</NavLink>
          </div> 
          <div className="header__logo-info-box">
            ул. Азина, 81, Саратов  
          </div> 
          <div className="header__logo-info-box">
            +7-917-308-09-37
          </div>
        </div>
        <nav className="header__nav">
          <NavLink to="/" className="header__nav-item">Главная</NavLink>
          <NavLink to="/catalog" className="header__nav-item">Каталог</NavLink>
          <NavLink to="/contacts" className="header__nav-item">Контакты</NavLink>
          <NavLink to="/aboutus" className="header__nav-item">О нас</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;