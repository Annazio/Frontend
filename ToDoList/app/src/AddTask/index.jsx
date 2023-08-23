import React from 'react'
import s from './style.module.css'


export default function AddTask({add}) {
    const handler = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        add(title);
        event.target.reset();
      }
  return (
    <div>
        <form onSubmit={handler} className={s.form}>
            <input type="text" name='title' placeholder='Aufgabe' />
            <button>Aufgabe hinzufügen</button>
        </form>
    </div>
  )
}
