import React, { FC } from 'react'
import classes from './mainMenu.module.scss'
import arrow from './img/arrow.png'

interface ElProps {
  el: IEl
}

interface IEl {
  key: number
  img: string
  titel: string
  active: boolean
}

const MenuEl: FC<ElProps> = ({ el }) => {
  return (
    <div className={classes.elMenu}>
      <img src={el.img} alt={el.img} />
      <div className={classes.elMenu__body}>
        <p>{el.titel}</p>
        <img src={arrow} alt={'arrow'} />
      </div>
    </div>
  )
}

export default MenuEl
