import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Row = {
  name: string;
  color: string;
  items: string[];
};

export interface BoardState {
  board: Row[];
  numRows: number;
}

const initialState: BoardState = {
  board: [
    {
      name: 'Winnie',
      color: '#8e6e95',
      items: ['card 1', 'card 2'],
    },
    {
      name: 'Bob',
      color: '#39a59c',
      items: ['card 1', 'card 2'],
    },
    {
      name: 'Thomas',
      color: '#344759',
      items: ['card 1', 'card 2'],
    },
    {
      name: 'George',
      color: '#e8741e',
      items: ['card 1', 'card 2'],
    },
  ],
  numRows: 4,
};

let storedState: any = window.localStorage.getItem('board');
if (storedState) storedState = JSON.parse(storedState);

const boardSlice = createSlice({
  name: 'board',
  // pull from local storage if it exists
  initialState: storedState || initialState,
  reducers: {
    addCard(state, action: PayloadAction<{ text: string; rowIdx: number }>) {
      const { text, rowIdx } = action.payload;
      state.board[rowIdx].items.push(text);
      window.localStorage.setItem('board', JSON.stringify(state));
    },
    moveCard(
      state,
      action: PayloadAction<{ currRowIdx: number; targetRowIdx: number; cardIdx: number }>
    ) {
      const { currRowIdx, targetRowIdx, cardIdx } = action.payload;
      const cardText = state.board[currRowIdx].items[cardIdx];
      state.board[currRowIdx].items.splice(cardIdx, 1);
      state.board[targetRowIdx].items.push(cardText);
      window.localStorage.setItem('board', JSON.stringify(state));
    },
  },
});

const { actions, reducer } = boardSlice;

export const { addCard, moveCard } = actions;

export default reducer;
