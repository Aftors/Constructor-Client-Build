import React, { FC } from 'react'
import classes from './modal.module.scss'
import cross from './cancel.png'
import { ModalProps } from '../../../types/GlobalsTypes'

const Modal: FC<ModalProps> = ({ active, setActive, H1 = '', children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setActive(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <div className={classes.contentHeader}>
          <p />
          {H1 ? <h1>{H1}</h1> : ''}
          <img src={cross} alt={'cross'} onClick={() => setActive(false)} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
