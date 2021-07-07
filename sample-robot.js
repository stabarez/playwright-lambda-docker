const { firefox } = require('playwright')

const SampleRobot = async () => {
  const browser = await firefox.launch({ executablePath: process.env.FF_BROWSER_PATH })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://www.google.com/')

  console.log('Page loaded correctly!')
  await page.close()
  return true
}

module.exports = SampleRobot
