import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import EditNote from './EditNote'
import HomePage from './HomePage'
import NotesApp from './NotesApp'
import {AnimatePresence} from "framer-motion"
import PageNotFound from './PageNotFound'

export const AllRoutes = () => {

  const location=useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<HomePage/>} />
        <Route path='/notes' element={<ReqAuth><NotesApp/></ReqAuth>} />
        <Route path='/update/:id' element={<ReqAuth><EditNote/></ReqAuth>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </AnimatePresence>    
  )
}
