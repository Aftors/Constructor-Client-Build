import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MainMenuReducer from './reducers/MenuSlice'

const rootReducer = combineReducers({
  MainMenuReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
