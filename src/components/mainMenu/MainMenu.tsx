import React, { FC } from 'react'
import classes from './mainMenu.module.scss'
import cross from '../UI/modal/cancel.png'
import MenuEl from './MenuEl'
import { man } from './img/importIMG'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'

interface MenuProps {
  active: boolean
  setActive: (e: boolean) => void
}

const MainMenu: FC<MenuProps> = ({ active, setActive, children }) => {
  const elMenu = useAppSelector((state) => state.MainMenuReducer.elMenu)

  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setActive(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <div className={classes.contentHeader}>
          <div className={classes.userImages}>
            <img src={man} alt={'man'} />
            <p>White Aftor</p>
          </div>
          <img src={cross} alt={'cross'} onClick={() => setActive(false)} />
        </div>
        {elMenu.map((el) => (
          <MenuEl el={el} key={el.key} />
        ))}
        {children}
      </div>
    </div>
  )
}

export default MainMenu
