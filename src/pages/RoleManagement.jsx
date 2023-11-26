import React from 'react'
import Sidebar from '../components/Sidebar'
import Role from '../components/Role'

const RoleManagement = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Role/>
    </div>
  )
}

export default RoleManagement