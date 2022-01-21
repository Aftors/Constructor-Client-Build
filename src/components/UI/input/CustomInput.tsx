import React, { FC } from 'react'
import { InputProps } from '../../../types/GlobalsTypes'
import classes from './customInput.module.scss'

const CustomInput: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className={classes.input} />
}

export default CustomInput
