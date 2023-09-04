import s from './style.module.css';

export default function Popup({user, setIsActive}) {
    console.log(user);
  return (
    <div className={s.popup}>
        <div className={s.popupContent}>
            <ul>
                <p>Name:{user.first_name} </p>
                <p>Last Name:{user.last_name}</p>
                <p>Phone: {user.phone}</p>
            </ul>
       <div className={s.closed} onClick={()=> setIsActive(false)}>x</div>
    </div>
    </div>
  )
}
