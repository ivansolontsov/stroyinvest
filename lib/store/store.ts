import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './modal/modalSlice'
import { socialsReducer } from './socials/socialsSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        socials: socialsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch