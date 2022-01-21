import React, { FC } from 'react'
import AuthApple from './authApple/AuthApple'
import AuthEmail from './authEmail/AuthEmail'
import AuthGoogle from './authGoogle/AuthGoogle'
import classes from './auth.module.scss'

const Auth: FC = () => {
  return (
    <div className={classes.authConteiner}>
      <h1>Авторизация</h1>
      <form className={classes.authForm}>
        <AuthApple />
        <AuthGoogle />
        <AuthEmail />
      </form>
      <p className={classes.regLink}>
        нет аккаунта? <span>зарегистрироваться</span>
      </p>
    </div>
  )
}

export default Auth
