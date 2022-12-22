import React from 'react'
import { DataTable } from './DataTable'
import {Route, Routes} from 'react-router-dom'
import { AddForm } from './AddForm'

export const Content = () => {
  return (
    <div className='min-h-full w-[90%] pt-8 flex flex-col'>
      <Routes>
        <Route path='/' element={<DataTable/>}></Route>
        <Route path='/add' element={<AddForm/>}></Route>
      </Routes>
    </div>
  )
}
