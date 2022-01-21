import React, { FC } from 'react'
import classes from './buttonAuth.module.scss'

interface ButtonAuthProps {
  children?: React.ReactChild | React.ReactNode
  active?: boolean
  colorButton: ColorVariant
  buttonType?: string
}

interface CSSType {
  [key: string]: string
}

export enum ColorVariant {
  black = 'black',
  red = 'red',
  white = 'white',
  blue = 'blue',
}

const ButtonAuth: FC<ButtonAuthProps> = ({
  children,
  active,
  colorButton = 'default',
  buttonType = 'default',
  ...props
}) => {
  const color: CSSType = {
    default: '',
    black: classes.buttonBlack,
    red: classes.buttonRed,
    white: classes.buttonWhite,
    blue: classes.buttonBlue,
  }

  const buttonStyle: CSSType = {
    default: '',
    icons: classes.buttonIcons,
  }

  return (
    <button
      {...props}
      className={
        active
          ? `${classes.authButtonDefault} ${color[colorButton]} ${buttonStyle[buttonType]} ${classes.active}`
          : `${classes.authButtonDefault} ${color[colorButton]} ${buttonStyle[buttonType]}`
      }
    >
      {children}
    </button>
  )
}

export default ButtonAuth
