// @flow
import { parse } from 'babylon'
import generate from 'babel-generator'

export default function (code: string): string {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: [
      'jsx'
    ]
  })
  return generate(ast, {}, code).code
}
