# autoformat
⚠️ This is an experiment. Proceed at your own peril.

## Development
```
npm install
npm test
// when you are done, to stop the flow server
npm stop
```

## Motivation
The goal is to create a configurable formatter based on babel. The idea of code formatting is inspired by `gofmt`.

Imagine a world where code style discussions are a thing of the past; (most) linting rules are obsolete. All of this and more could be accomplished by a formatter that is fast and works with all the cool new stuff, that we are use to (ES2015, flow, ...).

Because currently available formatters are not based on babel, they cannot support all the features that the babel ecosystem supports. Often such formatters are limited to whitespace and semicolons. By basing a formatter on babel, the formatter can support any feature of the complexity that can be handled with babel compiler architecture (using transforms and a configurable generator).

## Advantages
If we had such a configurable, mighty formatter, a number of problems are instantly solved. First, code style wars are a thing of the past. Of course, you can argue the same for ESLint, but a) there are always ambiguities and b) many ESLint rules cannot be autofixed due to the nature of their [autofix architecture](https://github.com/eslint/eslint/issues/5329). `autoformat` would always overwrite your source file deterministically and code style becomes a non-issue. In an ideal world, `autoformat`'s configuration would correspond to ESLint rules.

Second, once adopted, `autoformat` could be used as a transformer+printer for codemods. Currently codemods rely on recast, which tries really hard to infer your codestyle and disrupt the modified file as little as possible by only reprinting the parts of the AST that changed. This compilicated magic becomes unnecessary once a deterministic code formatter is adopted for a code base, because the modded AST can simple be handed to `autoformat` and it will print it for you.
