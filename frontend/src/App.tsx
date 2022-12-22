import React from 'react'
import { Content } from './components/Content'
import { Navbar } from './components/Navbar'


export const App = () => {
  return (
    <div className="font-roboto flex min-h-screen bg-gradient-to-bl from-black to-gray-900 text-white p-4 pl-2">
        <Navbar></Navbar>
        <Content></Content>
    </div>
  )
}

export default App
