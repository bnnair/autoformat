// @flow
import fs from 'fs'
import path from 'path'

import autoformat from '../src/autoformat'

const code = fs.readFileSync(path.join(__dirname, 'fixtures/react-component.js'), 'utf-8')
const formatted = autoformat(code)

console.log(formatted)
