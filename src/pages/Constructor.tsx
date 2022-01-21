import React, { FC } from 'react'
import Header from '../components/header/Header'
import '../App.scss'
import FunctionalButton from '../components/functionButton/FunctionalButton'

const constructor: FC = () => {
  return (
    <div className="Constructor">
      <Header />
      <FunctionalButton />
    </div>
  )
}

export default constructor
