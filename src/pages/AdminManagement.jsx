import React from 'react'
import Sidebar from '../components/Sidebar'
import Admin from '../components/Admin'
const AdminManagement = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Admin/>
    </div>
  )
}

export default AdminManagement