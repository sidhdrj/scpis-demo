export interface Card {
  id: number;
  title: string;
  description: string;
}

export interface Column {
  column: {id: number
  title: string
  };
  cards: Card[];
}

export const ItemTypes = {
    CARD: 'card',
  }