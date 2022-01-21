import React, { FC } from 'react'
import funcButton from './funcButton.png'
import classes from './funcButton.module.scss'

const FunctionalButton: FC = () => {
  return (
    <div className={classes.funcButton}>
      <img src={funcButton} alt={'funcButton'} />
    </div>
  )
}

export default FunctionalButton
