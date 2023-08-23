import React from 'react'

export default function TodoController({setAllDone, setAllUndone,  removeDoneTasks, removeAllTasks}) {
  return (
    <div>
    <button onClick={setAllDone}>Alles erledigt</button>
    <button onClick={setAllUndone}>Alles zu erledigen</button>    
    <button onClick={removeDoneTasks}>Erledigte Aufgaben löschen</button>
    <button onClick={removeAllTasks}>Alle Aufgaben löschen</button>
    </div>
  )
}

