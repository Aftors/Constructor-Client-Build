import React, { FC } from 'react'
import Authorization from '../pages/Authorization'
import Table from '../pages/Table'
import Constructor from '../pages/Constructor'
import Analitycs from '../pages/Analytics'
import Account from '../pages/Account'
import { Routes, Route } from 'react-router-dom'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route path="/table" element={<Table />} />
      <Route path="/constructor" element={<Constructor />} />
      <Route path="/analytics" element={<Analitycs />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  )
}

export default AppRouter
