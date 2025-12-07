import React from 'react'
import BlockchainLogViewer from './BlockchainLogViewer'
import RiskTable from './RiskTable'

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome, {user.email}</h2>
        <p>Your login and access events are being monitored in real-time.</p>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="grid">
        <RiskTable />
        <BlockchainLogViewer />
      </div>
    </div>
  )
}
