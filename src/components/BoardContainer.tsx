import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { BoardState } from '../redux/reducers/boardReducer';
import BoardRow from './BoardRow';

const BoardContainer = () => {
  const board = useSelector((state: { board: BoardState }) => state.board.board);
  return (
    <div className="board-container">
      {board.map((row, idx) => (
        <BoardRow key={uuid()} name={row.name} color={row.color} items={row.items} rowIdx={idx} />
      ))}
    </div>
  );
};

export default BoardContainer;
