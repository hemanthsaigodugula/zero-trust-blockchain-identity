// Very simple risk engine demo – you can expand later

export default function zeroTrust(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress
  const userAgent = req.headers['user-agent'] || 'unknown'

  // Simple risk mock: if user-agent contains 'curl' or 'python', treat as risky
  let riskScore = 0.1
  if (/curl|python|wget/i.test(userAgent)) {
    riskScore = 0.9
  }

  req.riskScore = riskScore

  if (riskScore > 0.8) {
    return res.status(403).json({
      message: 'Access blocked by zero-trust engine (demo)',
      riskScore
    })
  }

  next()
}
