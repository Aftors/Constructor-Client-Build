import React, { FC } from 'react'
import classes from './header.module.scss'
import HeaderAccount from './account/HeaderAccount'
import HeaderLogo from './logo/HeaderLogo'

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <HeaderLogo />
      <HeaderAccount />
    </div>
  )
}

export default Header
