import React from 'react'

export default function BlockchainLogViewer() {
  // Static placeholder data – later replace with on-chain query
  const logs = [
    { id: 1, event: 'LOGIN_SUCCESS', tx: '0xabc123...', ts: '2025-12-06T10:00:00Z' },
    { id: 2, event: 'LOGIN_BLOCKED', tx: '0xdef456...', ts: '2025-12-06T10:05:00Z' }
  ]

  return (
    <div className="card">
      <h3>On-Chain Access Logs (Demo Data)</h3>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Tx Hash</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(l => (
            <tr key={l.id}>
              <td>{l.event}</td>
              <td><code>{l.tx}</code></td>
              <td>{l.ts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
