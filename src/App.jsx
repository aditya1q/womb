import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Forget from './pages/Forget'
import Login from './pages/Login'
import AdminManagement from './pages/AdminManagement'
import RoleManagement from './pages/RoleManagement'
import ContentManagement from './pages/ContentManagement'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<AdminManagement/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route  path='/forget' element={<Forget/>} />
        <Route path='/role' element={<RoleManagement/>}/>
        <Route path='/content' element={<ContentManagement/>} />
      </Routes>
    </Router>
  )
}

export default App