'use client'

import { createSlice } from '@reduxjs/toolkit'

interface ImageState {
  selectedImage: string | null
}
const initialState: ImageState = {
  selectedImage: null,
}

const containerTopSlice = createSlice({
  name: 'containerTopState',
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload
    },
  },
})
export const { setSelectedImage } = containerTopSlice.actions
export default containerTopSlice.reducer
