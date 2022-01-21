import React, { FC } from 'react'
import ButtonAuth, { ColorVariant } from '../authUI/buttonAuth/ButtonAuth'
import imgApple from '../img/apple.png'
import classes from './authApple.module.scss'

const AuthApple: FC = () => {
  return (
    <div className={classes.authApple}>
      <ButtonAuth colorButton={ColorVariant.black} buttonType="icons">
        <img src={imgApple} alt={'imgApple'} />
      </ButtonAuth>
      <ButtonAuth colorButton={ColorVariant.black}>Войти с Apple</ButtonAuth>
    </div>
  )
}

export default AuthApple
