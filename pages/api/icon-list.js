const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const handler = async (req, res) => {
  const svgDir = path.resolve(__dirname, '../../../../plugins/webfont-generator/src/svg')
  const files = await fs.readdirSync(svgDir)

  const iconNames = _.map(files, icon => icon.split('.svg')[0])

  res.json({
    icons: iconNames,
  })
}

export default handler
