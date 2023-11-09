import React from 'react'

import './Dashboard.css'
import Card from './Card'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='greeting'>
        <p>Welcome, Jhon Doe</p>
      </div>
      <div>
          <Card title={'Storage'} viewall={true}/>
      </div>
    </div>
  )
}

export default Dashboard