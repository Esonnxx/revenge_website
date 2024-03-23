'use client'

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/counter/counterSlice'
import appStateReducer from './Features/appStates/appStateSlice'
import packContainerReducer from './Features/appStates/packContainerSlice'
import containerReducer from './Features/appStates/containerSlice'
import containerTopReducer from './Features/appStates/containerTopSlice'
import imgResultReducer from './Features/appStates/imgResultSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    appState: appStateReducer,
    packContainerState: packContainerReducer,
    containerState: containerReducer,
    containerTopState: containerTopReducer,
    imgResultState: imgResultReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
