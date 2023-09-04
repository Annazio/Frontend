import React, {useState} from 'react'
import TodoItem from '../TodoItem';
import TodoController from '../TodoController';
import AddTask from '../AddTask';

export default function TodoList() {
    const initialState = [
        {id: 1, title: 'Waschen', done_flg: true},
        {id: 2, title: 'Putzen', done_flg: false},
        {id: 3, title: 'Fahren', done_flg: true},
        {id: 4, title: 'Einkaufen', done_flg: false},
        {id: 5, title: 'Tanzen', done_flg: true},
    ]
    
    const [tasks, setTasks] = useState(initialState);
 
// Создать функцию которая в качестве аргумента получает ид задачи и изменяет
//  у нее done_flg на противоположный
function changeDone(delId) {
   const target = tasks.find(({id}) => id === delId);
   target.done_flg = !target.done_flg;
   setTasks([...tasks]); 
   }

  //  Создать функцию удаления и прокинуть до TodoItem и повесить обработчик  onclick на кнопк

  function remove(id) {
    const newList = tasks.filter(item => item.id !== id);
    setTasks(newList)
  }

  // Делает все дела сделанными

  function setAllDone() {
    const newArr = tasks.map(task => {
        task.done_flg = true;
        return task
    })
    setTasks(newArr)
  }

// Делает все дела несделанными

function setAllUndone() {
  const newArr = tasks.map(task => {
    task.done_flg = false;
    return task
  })
  setTasks(newArr)
}

//  При нажатии на кнопу все сделанные дела должны удалиться

function removeDoneTasks() {
  const newList = tasks.filter(({done_flg}) => !done_flg);
  setTasks(newList)
}

// Добавить кнопку, которая удаляет все дела

function removeAllTasks() {
 setTasks([]);
}

function add(title){
  const newTask = {
    id: Date.now(),
    title,
    done_flg: false
  }
  setTasks([...tasks, newTask])
}

// Когда нет задач, выводить "keine Aufgaben"
// keine Aufgaben


  return (
    <div>
      <AddTask  add={add}/>
        <div>
            {
            tasks.length === 0
            ? <p>keine Aufgaben</p>
            : tasks.map(item => <TodoItem key={item.id} {...item} changeDone={changeDone} remove={remove}/>)
            }
        </div>
        <TodoController setAllDone={setAllDone} setAllUndone={setAllUndone} removeDoneTasks={removeDoneTasks} removeAllTasks={removeAllTasks}/>
    </div>
  )

} 