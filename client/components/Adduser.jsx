import React, { useState } from 'react'
import { createUser} from '../services/userService.js'

const Adduser = () => {
const [form , setForm] = useState({
  name: '',
  email: '',
  password: ''
})
const formData = (event) => {
 setForm({...form,[event.target.name]: event.target.value})
}
const submitForm = async (event) => {
  event.preventDefault();
  await createUser(form);
}

  return (
    <div>
        <h1>Add User</h1>
    <form onSubmit={submitForm}>
        <input name="name" placeholder='Enter your Name' value={form.name} onChange={formData}/>
        <input name="email" placeholder='Enter your Email' value={form.email} onChange={formData} />
        <input name="age" placeholder='Enter your Age' value={form.age} onChange={formData}/>
        <button type='submit'>Add User</button>
    </form>
    </div>
  )
}

export default Adduser
