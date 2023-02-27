import { Column } from "./ItemTypes";

  

export const initialColumns: Column[] = [
    {
      column :{id: 1,title: 'To Do'},
      cards: [
        {
          id: 1000,
          title: 'Task 1',
          description: 'Do something',
        },
        {
          id: 2000,
          title: 'Task 2',
          description: 'Do something else',
        },
        {
            id: 5000,
            title: 'Task 1',
            description: 'Do something',
          },
          {
            id: 6000,
            title: 'Task 2',
            description: 'Do something else',
          },
          {
            id: 7000,
            title: 'Task 1',
            description: 'Do something',
          },
          {
            id: 8000,
            title: 'Task 2',
            description: 'Do something else',
          },
          
      ],
    },
    {
      column:{id: 2,
      title: 'In Progress'},
      cards: [
        {
          id: 3000,
          title: 'Task 3',
          description: 'Do another thing',
        },
        {
            id: 9000,
            title: 'Task 1',
            description: 'Do something',
          },
          {
            id: 1100,
            title: 'Task 2',
            description: 'Do something else',
          },
      ],
    },
    {
      column:{id: 3,
      title: 'Done'},
      cards: [{
        id: 4000,
        title: 'Task 4',
        description: 'Completd task',
      },],
    },
  ];
  