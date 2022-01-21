import React, { FC } from 'react'
import { InputProps } from '../../../../types/GlobalsTypes'
import classes from './inputAuth.module.scss'

const InputAuth: FC<InputProps> = ({ active, ...props }) => {
  return (
    <input
      {...props}
      className={
        active ? `${classes.inputAuth} ${classes.active}` : classes.inputAuth
      }
    />
  )
}
export default InputAuth
