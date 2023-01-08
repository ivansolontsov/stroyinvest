import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modalState {
    isOpen: boolean,
}

const initialState: modalState = {
    isOpen: false,
}

export const modal = createSlice({
    name: 'cartModal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction) => {
            state.isOpen = true;
        },
        closeModal: (state, action: PayloadAction) => {
            state.isOpen = false;
        }
    }
})


export const modalReducer = modal.reducer
export const { openModal, closeModal } = modal.actions
