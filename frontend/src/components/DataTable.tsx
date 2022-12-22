import axios from 'axios'
import React, { useEffect, useState } from 'react'

type datas = {
  name: String,
  email: String,
  age: number,
  gender: String,
  id: String,
}[]

const editHandler = (id: String) => {

}

const deleteHandler = (id: String) => {

}

export const DataTable = () => {
  const [datas, setDatas] = useState<datas|[]>([]);
  
  useEffect(()=>{
    axios.get('http://localhost:3000/').then((response)=>response.data)
    .then(data =>{ 
      setDatas(data)
      console.log(data)
    })
    .catch(err => console.log(err.message))
  },[])

  if(!datas){
    return <h1>Loading . . .</h1>
  }

  return (
    <div className=''>
      <h1 className='mb-3 font-extrabold text-4xl'>Home</h1>
      <div className=' mx-auto p-5 bg-black/10 rounded border border-slate-600'>
        <table className='table-fixed min-w-full border-separate own-table-spacing'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody >
            {datas.map((data, i) => {
              console.log(data);
              return(
              <tr className='border-b' key={i}>
                <td className='text-center'>{i+1}</td>
                <td className='text-center'>{data.name}</td>
                <td className='text-center'>{data.age}</td>
                <td className='text-center'>{data.email}</td>
                <td className='text-center'>{data.gender}</td>
                <td>
                  <div className='flex gap-5 w-auto justify-center'>
                    <button className='bg-teal-500 py-1 px-2 rounded font-semibold' onClick={()=> editHandler(data.id)}>Edit</button>
                    <button className='bg-red-600 py-1 px-2 rounded font-semibold' onClick={()=> deleteHandler(data.id)}>Delete</button>
                  </div>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
