import React from 'react';
import { useDispatch } from 'react-redux';
import { moveCard } from '../redux/reducers/boardReducer';

interface Props {
  text: string;
  rowIdx: number;
  numRows: number;
  itemIdx: number;
}

const BoardItem: React.FC<Props> = ({ text, rowIdx, numRows, itemIdx }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      {rowIdx > 0 && (
        <button
          className="item__btn-left"
          onClick={() => {
            dispatch(moveCard({ currRowIdx: rowIdx, targetRowIdx: rowIdx - 1, cardIdx: itemIdx }));
          }}
        >
          &lt;
        </button>
      )}
      <p>{text}</p>
      {rowIdx < numRows - 1 && (
        <button
          className="item__btn-right"
          onClick={() => {
            dispatch(moveCard({ currRowIdx: rowIdx, targetRowIdx: rowIdx + 1, cardIdx: itemIdx }));
          }}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default BoardItem;
