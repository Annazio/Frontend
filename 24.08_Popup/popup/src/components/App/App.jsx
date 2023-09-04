import s from './style.module.css';
import '../../styles.css';
import Form from '../Form/Form';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [isActive, setIsActive] = useState(false)
  
function add(user){
setUser(user);
setIsActive(true);
  }

  return (
   <div className={s.app}>
    <Form add={add}/>
    {
      isActive?
      <Popup user={user} setIsActive={setIsActive}/> :
      ''
    }
   
   </div>
  );
}

export default App;
// Написать форму с полями и кнопкой сабмит. 
// При заполнении формы и клике сабмит у вас должен появиться попап с информацией о пользователе из инпутов формы. 
// Так же пользователь может по крестику закрыть попап.
