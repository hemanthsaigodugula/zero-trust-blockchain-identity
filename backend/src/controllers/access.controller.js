export const accessResource = (req, res) => {
  // If zeroTrust middleware allows the request, we return success
  return res.json({
    message: 'Resource access allowed by zero-trust engine (demo)',
    riskScore: req.riskScore ?? 0
  })
}
