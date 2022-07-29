import React from 'react'

import logo from '../../assets/img/logo.svg'

type MainLayoutProps = {
  children: React.ReactNode
}

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="" />
    </a>
  )
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Logo />
      {children}
    </div>
  )
}
