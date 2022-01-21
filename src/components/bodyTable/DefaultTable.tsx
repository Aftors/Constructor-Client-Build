import React, { FC } from 'react'
import classes from './defaultTable.module.scss'
import CustomButton from '../UI/button/CustomButton'
import Modal from '../UI/modal/Modal'
import { useState } from 'react'
import CustomInput from '../UI/input/CustomInput'

const DefaultTable: FC = () => {
  const [modalCreate, SetModalCreate] = useState(false)
  const [siteName, setSiteName] = useState('')
  const [derectionSite, setDerectionSite] = useState('')

  return (
    <div className={classes.body}>
      <h1>Список сайтов</h1>
      <h2>У вас еще не создано ни одного сайта.</h2>
      <span>
        <h3>Давайте создадим первый</h3>
      </span>

      <CustomButton colorButton="yellow" onClick={() => SetModalCreate(true)}>
        <span style={{ fontSize: '16px' }}>+</span> Создать новый сайт
      </CustomButton>
      <Modal
        active={modalCreate}
        H1={!siteName ? 'Новый сайт' : siteName}
        setActive={SetModalCreate}
      >
        <p>Название сайта:</p>
        <CustomInput
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          type="text"
          placeholder="Назвавние сайта"
        />
        <p>Адрес сайта:</p>
        <div className={classes.derectionInput}>
          <h5>derection.org://</h5>
          <CustomInput
            value={derectionSite}
            onChange={(e) => setDerectionSite(e.target.value)}
            type="text"
            placeholder="адрес"
          />
        </div>
        <h6>Используйте только латинские буквы, цифры и знаки «-», «_», «.»</h6>

        <CustomButton colorButton="blueMax">Создать</CustomButton>
      </Modal>
    </div>
  )
}

export default DefaultTable
