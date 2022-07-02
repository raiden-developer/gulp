const {src, dest} = require('gulp')

// Config
const path = require('../config/path.js')
const app = require('../config/app.js')

// Plugins
const fs = require('fs')
const merge = require('merge-stream')
const svgSprite = require('gulp-svg-sprite')

// Обработка SVG Спрайтов
const sprite = () => {
  let imgDirs = fs.readdirSync(path.sprite.src)
  let arr = []

  imgDirs.map(function (dir) {
    // console.log(`${srcFolder}/img/svg/${dir}`)
    arr.push(
      src(`${path.sprite.src}/${dir}/*.svg`)
        .pipe(
          svgSprite({
            mode: {
              stack: {
                sprite: `../${dir}.svg`
              }
            }
          })
        )
        .pipe(dest(path.sprite.dest))
    )
  })

  return merge(arr)
}

module.exports = sprite
