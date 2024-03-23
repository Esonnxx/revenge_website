'use client'

import { createSlice } from '@reduxjs/toolkit'

interface ImageState {
  selectedImage: string | null
}
const initialState: ImageState = {
  selectedImage: null,
}

const containerSlice = createSlice({
  name: 'containerState',
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload
    },
  },
})
export const { setSelectedImage } = containerSlice.actions
export default containerSlice.reducer
