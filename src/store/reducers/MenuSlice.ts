import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  graphic,
  headphones,
  pencil,
  qrcode,
  star,
  user,
} from '../../components/mainMenu/img/importIMG'

const initialState = {
  elMenu: [
    { key: 1, img: user, titel: 'Управление аккаунтом', active: false },
    { key: 2, img: graphic, titel: 'Аналитика', active: false },
    { key: 3, img: pencil, titel: 'Редактирование', active: false },
    { key: 4, img: qrcode, titel: 'QR-код', active: false },
    { key: 5, img: star, titel: 'Тарифный план', active: false },
    { key: 6, img: headphones, titel: 'Служба поддержки', active: false },
  ],
}

export const menuSlice = createSlice({
  name: 'MainMenu',
  initialState,
  reducers: {
    getMenu(state) {
      return state
    },
  },
})

export default menuSlice.reducer
