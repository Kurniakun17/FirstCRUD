import React from 'react'
import { useForm } from 'react-hook-form'

type UserData = {
  name: String,
  email: String,
  age: number,
  gender: String,
  id: String,
}

export const AddForm = () => {
  const {register, handleSubmit} = useForm<UserData>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <div className=''>
      <h1 className='mb-3 font-extrabold text-4xl'>Home</h1>
      <div className=' mx-auto p-5 bg-black/10 rounded border border-slate-600'>
      <form className='flex flex-col' onSubmit={onSubmit}>
          <label htmlFor="Name">Name</label>
          <input {...register('name')} id="Name" type="text" required placeholder='Name'/>
          <label htmlFor="Age">Age</label>
          <input {...register('age')} id="Age" type="text" required placeholder='Age'/>
          <label htmlFor="Email">Email</label>
          <input {...register('email')} id="Email" type="email" required placeholder='Email'/>
          <label htmlFor="Gender">Gender</label>
          <input {...register('gender')} id="Gender" type="text" required placeholder='Gender'/>
          <button>
            <div className='py-2 mt-6 text-semibold bg-black border-slate-100'>Submit</div>
          </button>
      </form>
      </div>
    </div>
  )
}
