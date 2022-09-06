import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <div className="bg">
        <div className="bg__wrapper">
          <div className="bg__overlay"></div>
          <div className="bg__image"></div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout