import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AuthForm from "./pages/AuthForm"
import NotFound from "./pages/NotFound"
import ProfilForm from './pages/ProfilForm'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthForm />} />
      <Route path='/profile' element={<ProfilForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
