const { expect } = require('chai')

describe('AccessLog', function () {
  it('should log events', async function () {
    const AccessLog = await ethers.getContractFactory('AccessLog')
    const accessLog = await AccessLog.deploy()
    await accessLog.waitForDeployment()

    const [user] = await ethers.getSigners()
    await accessLog.logEvent(user.address, 'LOGIN_SUCCESS', 10)

    const count = await accessLog.getEventsCount()
    expect(count).to.equal(1n)
  })
})
