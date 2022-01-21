import React, { FC } from 'react'
import { useState } from 'react'
import classes from './mainMenu.module.scss'
import cross from '../UI/modal/cancel.png'
import MenuEl from './MenuEl'
import {
  graphic,
  headphones,
  man,
  pencil,
  qrcode,
  star,
  user,
} from './img/importIMG'

interface MenuProps {
  active: boolean
  setActive: (e: boolean) => void
}

const MainMenu: FC<MenuProps> = ({ active, setActive, children }) => {
  const [elMenu] = useState([
    { key: 1, img: user, titel: 'Управление аккаунтом', active: false },
    { key: 2, img: graphic, titel: 'Аналитика', active: false },
    { key: 3, img: pencil, titel: 'Редактирование', active: false },
    { key: 4, img: qrcode, titel: 'QR-код', active: false },
    { key: 5, img: star, titel: 'Тарифный план', active: false },
    { key: 6, img: headphones, titel: 'Служба поддержки', active: false },
  ])

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
