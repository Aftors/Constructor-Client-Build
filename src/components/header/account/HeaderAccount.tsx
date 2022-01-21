import React, { Fragment, FC } from 'react'
import { useState } from 'react'
import classes from '../header.module.scss'
import accountIcons from './man.png'
import MainMenu from '../../mainMenu/MainMenu'

const HeaderAccount: FC = () => {
  const [modalMainMenu, setModalMeinMenu] = useState(false)
  return (
    <Fragment>
      <img
        className={classes.accountCircel}
        src={accountIcons}
        alt={'account'}
        onClick={() => setModalMeinMenu(true)}
      />

      <MainMenu active={modalMainMenu} setActive={setModalMeinMenu}></MainMenu>
    </Fragment>
  )
}

export default HeaderAccount
