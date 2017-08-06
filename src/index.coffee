fs = require 'fs'
{ extname, basename, resolve, join } = require 'path'

bookDir = resolve __dirname, '../color-books'
booknames = (basename(f, '.json') for f in fs.readdirSync(bookDir) when extname(f) is '.json')

load = (bookname) -> require join(bookDir, "#{bookname}.json")

module.exports = { booknames, load }
