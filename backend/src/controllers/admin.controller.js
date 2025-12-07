export const getRiskyEvents = (req, res) => {
  // Demo: static data – later fetch from blockchain or DB
  const events = [
    { id: 1, user: 'user1', action: 'LOGIN_BLOCKED', risk: 0.92 },
    { id: 2, user: 'user2', action: 'RESOURCE_DENIED', risk: 0.85 }
  ]
  res.json({ events })
}

export const getStats = (req, res) => {
  res.json({
    totalEvents: 10,
    blocked: 3,
    allowed: 7,
    generatedAt: new Date().toISOString()
  })
}
