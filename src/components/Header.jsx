import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <div className="header__logo">
          СТРОЙИНВЕСТ-С
        </div> 
        <div className="header__logo-info-box">
          ул. Азина, 81, Саратов  
        </div> 
        <div className="header__logo-info-box">
          +7-917-308-09-37
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__nav-item">Главная</div>
        <div className="header__nav-item">Каталог</div>
        <div className="header__nav-item">О нас</div>
        <div className="header__nav-item">Производство</div>
        <div className="header__nav-item">Контакты</div>
      </nav>
    </header>
  )
}

export default Header;