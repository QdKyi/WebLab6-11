import equipReducer from './reducers.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: equipReducer
  })

export default store;