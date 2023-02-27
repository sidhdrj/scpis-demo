import { useDrop } from 'react-dnd';
import { Card as card_imp,Column as column_imp } from './ItemTypes';
import {Card } from './Card';
import { useState } from 'react';

interface ColumnProps {
  id:number
  title:string
  cards: card_imp[];
  toIndex:number
  moveCard: (cardId: number, toColumn: number) => void;
}

interface BoardProps {
    columns: column_imp[];
  }

export const Column: React.FC<ColumnProps> = ({ id,title, cards,toIndex, moveCard }) => {
    console.log(toIndex);
  const [{canDrop , isOver }, drop] = useDrop({
    accept: 'card',
    
    drop: (item: { type: string; card: card_imp }, monitor) => {
        console.log(item);
      const { card } = item;
      moveCard(card.id, toIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: '1px solid black',
        padding: 10,
        marginBottom: 10,
        flex: 50,
        backgroundColor: isOver && canDrop ? 'lightgrey' : '',
      }}
    >
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card card={card} key={card.id} {...card} />
      ))}
    </div>
  );

};

export const Board: React.FC<BoardProps> = ({ columns}) => {
    const [columnData, setColumnData] = useState<column_imp[]>(columns);
    
    const handleMoveCard = (cardId: number, toColumnIndex: number) => {
      console.log(`Moving card ${cardId} to column ${toColumnIndex}`);
      
    let fromColumnIndex = -1;
    let cardIndex = -1;
    let card: card_imp | undefined;
    columnData.forEach((column, columnIndex) => {
      const index = column.cards.findIndex(c => c.id === cardId);
      if (index >= 0) {
        card = column.cards[index];
        cardIndex = index;
        fromColumnIndex = columnIndex;
      }
    });
    if (!card) return;

    // Remove the card from the original column
    const fromColumn = columnData[fromColumnIndex];
    const newFromColumn = {
      ...fromColumn,
      cards: [...fromColumn.cards.slice(0, cardIndex), ...fromColumn.cards.slice(cardIndex + 1)],
    };

    // Add the card to the new column
    const toColumn = columnData[toColumnIndex];
    const newToColumn = {
      ...toColumn,
      cards: [...toColumn.cards, card],
    };

    
    // Update the column data state
    setColumnData(columnData.map((column, index) => {
      if (index === fromColumnIndex) return newFromColumn;
      if (index === toColumnIndex) return newToColumn;
      return column;
    }
    
    ));

    console.log(columnData);
    };
  
    return (
      <div style={{ display: 'flex' }}>
        {columnData.map(({ column, cards }, index) => (
          <Column
            key={index}
            toIndex={index}
            id={column.id}
            title={column.title}
            cards={cards}
            moveCard={handleMoveCard}
           
          />
        ))}
      </div>
    );
  };
