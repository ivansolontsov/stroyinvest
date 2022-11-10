import React from 'react'
import burgerIcon from '../assets/images/icons/burger.svg'
import crossIcon from '../assets/images/icons/cross.svg'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [turnOffScroll, setTurnOffScroll] = React.useState(false);

  turnOffScroll ? disableBodyScroll(document) : enableBodyScroll(document)

  const dropdownOpen = (state) => {
    if(state) {
      setMobileMenu(true);
      setTurnOffScroll(true);
    } else {
      setMobileMenu(false);
      setTurnOffScroll(false);
    }
  }

  return (
    <header className="content">
      <div className="header__content-wrapper">
        <div className="header__left-side">
          <div className="header__logo">
            <NavLink to="/">СТРОЙИНВЕСТ-С</NavLink>
          </div> 
          {/* <div className="header__logo-info-box">
            ул. Азина, 81, Саратов  
          </div>  */}
          <div className="header__logo-info-box">
            +7 (927) 223-84-40, Сергей
          </div>
        </div>
        <nav className="header__nav invisible-mobile">
          <NavLink to="/" className="header__nav-item">Главная</NavLink>
          <NavLink to="/catalog" className="header__nav-item">Каталог</NavLink>
          <NavLink to="/contacts" className="header__nav-item">Контакты</NavLink>
          <NavLink to="/aboutus" className="header__nav-item">О нас</NavLink>
        </nav>
        <nav className="header__mobile-nav visible-mobile">
          <button className="header__mobile-nav-button" 
            onClick={() => {dropdownOpen(true)}}>
            <img src={burgerIcon} alt="Навигация" />
          </button>
        </nav>
      </div>
      <div className={`header__mobile-nav-wrapper ${mobileMenu ? 'mobile__menu-visible' : 'mobile__menu-invisible'}`}>
            <button className="header__mobile-nav-wrapper-cross" 
              onClick={() => {dropdownOpen(false)}}>
              <img src={crossIcon} alt="Закрыть Меню" /></button>
            <NavLink to="/" className="header__nav-item" onClick={()=>{dropdownOpen(false)}}>Главная</NavLink>
            <NavLink to="/catalog" className="header__nav-item" onClick={()=>{dropdownOpen(false)}}>Каталог</NavLink>
            <NavLink to="/contacts" className="header__nav-item" onClick={()=>{dropdownOpen(false)}}>Контакты</NavLink>
            <NavLink to="/aboutus" className="header__nav-item" onClick={()=>{dropdownOpen(false)}}>О нас</NavLink>
      </div>
    </header>
  )
}

export default Header;