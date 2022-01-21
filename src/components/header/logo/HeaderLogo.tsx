import React, { FC } from 'react'
import classes from '../header.module.scss'
import logo from './logo.png'
import { Fragment } from 'react'

const HeaderLogo: FC = () => {
  return (
    <Fragment>
      <img className={classes.headerLogo} src={logo} alt={'logo'} />
    </Fragment>
  )
}

export default HeaderLogo
