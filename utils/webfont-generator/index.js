const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const webfontsGenerator = require('webfonts-generator')

const main = async () => {
  console.log('Generating Webfonts..')
  const svgDir = path.resolve(__dirname, './src/svg')
  const svgFiles = await fs.readdirSync(svgDir, 'utf8')
  const svgFilePaths = _.map(svgFiles, file => path.resolve(svgDir, file))

  const result = await new Promise((resolve, reject) => {
    const fontsDir = path.join(__dirname, '../../assets/fonts/icon')
    const cssDir = path.join(__dirname, '../../assets/css/common/icon.css')

    webfontsGenerator({
      files: svgFilePaths,
      types: ['woff2'],
      dest: fontsDir,
      cssDest: cssDir,
      cssFontsUrl: '../../fonts/icon',
    }, (err, result) => {
      if (err) {
        reject(err)
        throw new Error(err)
      }

      resolve(result)
    })
  })

  console.log('Finished generate webfont')
}

main()
