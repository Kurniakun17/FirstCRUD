import React from 'react'
import { DataTable } from './DataTable'
import {Route, Routes} from 'react-router-dom'
import { AddForm } from './AddForm'
import { About } from './About'
import { NotFound } from './404NotFound'

export const Content = () => {
  return (
    <div className='min-h-full w-[90%] pt-8 flex flex-col'>
      <Routes>
        <Route path='/' element={<DataTable/>}></Route>
        <Route path='/add' element={<AddForm/>}></Route>
        <Route path='/info' element={<About></About>}></Route>
        <Route path='/:id' element={<AddForm></AddForm>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}
