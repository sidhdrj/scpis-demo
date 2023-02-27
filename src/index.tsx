
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { initialColumns } from './model/initialColumn'
import { Card } from './model/ItemTypes'
function App() {
  const handleMoveCard = (cardId: number, toColumnIndex: number) => {
    // Update the columns state here with the new card position
    console.log(`Moving card ${cardId} to column ${toColumnIndex}`);
    
  };
return (
  <div className="App">
    <DndProvider backend={HTML5Backend}>
      <div className="row center">
<h1> <center>Kanban Board</center> </h1>

      </div>
      <Example columns={initialColumns}  />
    </DndProvider>
  </div>
)
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)



const container = document.getElementById('root')!;
createRoot(container).render(<App />)
