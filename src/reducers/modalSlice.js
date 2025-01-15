import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    selectedTask: null
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedTask = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedTask = null;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;