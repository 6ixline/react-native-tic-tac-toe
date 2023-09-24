import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './player.reducer'

export const store = configureStore({
  reducer: {
    players: playerReducer
  }
})
