import React, { FC } from 'react'
import Header from '../components/header/Header'
import '../App.scss'
import DefaultTable from '../components/bodyTable/DefaultTable'
import FunctionalButton from '../components/functionButton/FunctionalButton'

const Table: FC = () => {
  return (
    <div className="Table">
      <Header />
      <DefaultTable />
      <FunctionalButton />
    </div>
  )
}

export default Table
