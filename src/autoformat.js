// @flow
import { parse } from 'babylon'
import generate from 'babel-generator'

export default function (code: string): string {
  const ast = parse(code, {
    sourceType: 'module',
  })
  return generate(ast, {}, code).code
}
