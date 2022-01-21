import React, { FC } from 'react'
import { useState } from 'react'
import InputAuth from '../authUI/inputAuth/InputAuth'
import './authEmail.scss'
import ButtonAuth, { ColorVariant } from '../authUI/buttonAuth/ButtonAuth'
import imgEmail from '../img/email.png'

const AuthEmail: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputVisible, setVisible] = useState(false)

  return (
    <div className={inputVisible ? 'authEmail active' : 'authEmail'}>
      <div
        onClick={() =>
          setVisible(() => {
            return inputVisible ? false : true
          })
        }
        className={inputVisible ? 'authEmailHeader active' : 'authEmailHeader'}
      >
        <img src={imgEmail} alt={'imgEmail'} />
        <h2>Войти с Email</h2>
      </div>
      <InputAuth
        value={email}
        type="text"
        active={inputVisible}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email:"
      />

      <InputAuth
        value={password}
        type="password"
        active={inputVisible}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль:"
      />

      <ButtonAuth colorButton={ColorVariant.blue} active={inputVisible}>
        Войти
      </ButtonAuth>
    </div>
  )
}

export default AuthEmail
