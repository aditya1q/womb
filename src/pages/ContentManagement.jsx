import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
const ContentManagement = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Content/>
    </div>
  )
}

export default ContentManagement