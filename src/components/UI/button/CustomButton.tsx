import React, { FC } from 'react'
import classes from './customButton.module.scss'

interface ButtonProps {
  colorButton: string
  onClick?: () => void
}

interface CSSType {
  [key: string]: string
}

const CustomButton: FC<ButtonProps> = ({
  children,
  colorButton = 'default',
  ...props
}) => {
  const color: CSSType = {
    default: '',
    blue: classes.buttonBlue,
    blueMax: classes.buttonBlueMax,
    yellow: classes.buttonYellow,
  }

  return (
    <button
      {...props}
      className={`${classes.buttonDefault} ${color[colorButton]}`}
    >
      {children}
    </button>
  )
}

export default CustomButton
