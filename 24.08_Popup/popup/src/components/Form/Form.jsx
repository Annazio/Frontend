import s from './style.module.css';

export default function Form({add}) {
    function handleclick(event) {
        event.preventDefault();
        const {first_name, last_name, phone} = event.target
        const user = {
            first_name: first_name.value,
            last_name: last_name.value,
            phone: phone.value
        }
        add(user)
    }
  return (
    <form onSubmit={handleclick}>
         <input type="text" name='first_name' placeholder='First name'/>
         <input type="text" name='last_name' placeholder='Last name' />
         <input type="text" name='phone' placeholder='Phone'/>
         <button>Send</button>
    </form>
  )
}
