import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, BoardState } from '../redux/reducers/boardReducer';
import BoardItem from './BoardItem';

interface Props {
  name: string;
  color: string;
  items: string[];
  rowIdx: number;
}

const BoardRow: React.FC<Props> = ({ name, color, items, rowIdx }) => {
  const numRows = useSelector((state: { board: BoardState }) => state.board.numRows);
  const dispatch = useDispatch();
  const handleAddCard = () => {
    const cardText = window.prompt('Type card text here');
    if (cardText?.length) dispatch(addCard({ text: cardText, rowIdx }));
  };
  return (
    <div className="row">
      <div className="row__title" style={{ backgroundColor: color }}>
        <p>{name}</p>
      </div>
      {items.map((item, idx) => (
        <BoardItem key={uuid()} text={item} rowIdx={rowIdx} numRows={numRows} itemIdx={idx} />
      ))}
      <button onClick={handleAddCard}>Add a card</button>
    </div>
  );
};

export default BoardRow;
