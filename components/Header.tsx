import React, { useEffect, useState } from 'react'
import burgerIcon from '../public/images/icons/burger.svg'
import crossIcon from '../public/images/icons/cross.svg'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Portal } from 'react-portal';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const [turnOffScroll, setTurnOffScroll] = React.useState<boolean>(false);

  useEffect(() => {
    turnOffScroll ? disableBodyScroll(document.body) : enableBodyScroll(document.body)
  }, [turnOffScroll])

  const dropdownOpen = (state: boolean) => {
    if (state) {
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
            <Link href="/">ООО «СТРОЙИНВЕСТ-С»</Link>
          </div>
          <div className="header__logo-info-box">
            ул. Азина, 81, Саратов
          </div>
          <div className="header__logo-info-box">
            +7 (927) 223-84-40, Сергей
          </div>
        </div>
        <nav className="header__nav invisible-mobile">
          <Link href="/" className="header__nav-item">Главная</Link>
          <Link href="/catalog" className="header__nav-item">Каталог</Link>
          <Link href="/contacts" className="header__nav-item">Контакты</Link>
          <Link href="/aboutus" className="header__nav-item">О нас</Link>
        </nav>
        <nav className="header__mobile-nav visible-mobile">
          <button className="header__mobile-nav-button"
            onClick={() => { dropdownOpen(true) }}>
            <Image src={burgerIcon} alt="Навигация" width={40} height={40} />
          </button>
        </nav>
      </div>
      {mobileMenu
        ? <Portal>
          <div className={`header__mobile-nav-wrapper ${mobileMenu ? 'mobile__menu-visible' : 'mobile__menu-invisible'}`}>
            <button className="header__mobile-nav-wrapper-cross"
              onClick={() => { dropdownOpen(false) }}>
              <Image src={crossIcon} alt="Закрыть" width={24} height={24} />
            </button>
            <Link href="/" className="header__nav-item" onClick={() => { dropdownOpen(false) }}>Главная</Link>
            <Link href="/catalog" className="header__nav-item" onClick={() => { dropdownOpen(false) }}>Каталог</Link>
            <Link href="/contacts" className="header__nav-item" onClick={() => { dropdownOpen(false) }}>Контакты</Link>
            <Link href="/aboutus" className="header__nav-item" onClick={() => { dropdownOpen(false) }}>О нас</Link>
          </div>
        </Portal>
        : ""
      }
    </header>
  )
}

export default Header;