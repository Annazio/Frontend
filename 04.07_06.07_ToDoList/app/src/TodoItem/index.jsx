import React from 'react'
import s from './style.module.css'

export default function TodoItem({title, done_flg, changeDone, id, remove}) {
  return (
    <div className={s.item}>
        <p className={done_flg ? s.done : ""}>{title}</p>
        <p>{done_flg ? 'erledigt' : 'in Bearbeitung' } </p>
        <input  type="checkbox" checked={done_flg ? "checked" : ''}  onChange={() => changeDone(id)}/>
        <button onClick={() => remove(id)}>Löschen</button>
    </div>
  )
}
