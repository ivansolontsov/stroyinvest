import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="content">
      <div className="content__bg">
        <div className="content__bg-overlay"></div>
        <div className="content__bg-image"></div>
      </div>
      {children}
    </div>
  )
}

export default Layout