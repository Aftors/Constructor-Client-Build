import React, { FC } from 'react'
import ButtonAuth from '../authUI/buttonAuth/ButtonAuth'
import imgGoogle from '../img/google.png'
import classes from './authGoogle.module.scss'
import { ColorVariant } from '../authUI/buttonAuth/ButtonAuth'

const AuthGoogle: FC = () => {
  return (
    <div className={classes.authGoogle}>
      <ButtonAuth colorButton={ColorVariant.red} buttonType="icons">
        <img src={imgGoogle} alt={'imgGoogle'} />
      </ButtonAuth>
      <ButtonAuth colorButton={ColorVariant.red}>Войти с Google</ButtonAuth>
    </div>
  )
}

export default AuthGoogle
