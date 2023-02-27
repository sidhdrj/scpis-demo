import { useDrag } from 'react-dnd';
import { Card as card_imp,ItemTypes } from './ItemTypes';


interface CardProps {
  card: card_imp;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    type:ItemTypes.CARD,
    item: { type: 'card', card },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid black',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: 'rgb(104 205 102)' ,
      }}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};
