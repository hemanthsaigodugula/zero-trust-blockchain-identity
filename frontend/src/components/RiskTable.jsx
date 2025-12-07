import React from 'react'

export default function RiskTable() {
  // Static placeholder data – replace with API call later
  const events = [
    { id: 1, user: 'user1', action: 'LOGIN_SUCCESS', risk: 0.12 },
    { id: 2, user: 'user1', action: 'LOGIN_BLOCKED', risk: 0.89 }
  ]

  return (
    <div className="card">
      <h3>Recent Risk Events (Demo Data)</h3>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {events.map(e => (
            <tr key={e.id}>
              <td>{e.user}</td>
              <td>{e.action}</td>
              <td>{e.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
