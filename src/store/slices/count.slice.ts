import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, { payload }: PayloadAction<{ count?: number }>) => {
      if (payload.count !== undefined) {
        state.count = payload?.count
      }
    },
  },
})

export const { setCount } = countSlice.actions
export default countSlice.reducer
