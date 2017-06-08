# Git Watch

Like [node-watch](https://www.npmjs.com/package/node-watch) but only run when things change when using `git status`

## Installation

```bash
npm install git-watch
```

## Usgae

### Node

```js
const gitWatch = require('git-watch')

gitWatch(__dirname, (gitError, fileName, watchEvent, gitStatus) => {
    console.log(fileName, watchEvent)
})
```

`gitError` is `null` unless git errors, e.g. not a git repo

`fileName` is the name of the file which has changed

`watchEvent` see [node-watch](https://www.npmjs.com/package/node-watch) but things like `change` and `remove`

`gitStatus` is the response from `git status`

### CLI

You can even use this from the command line

```bash
git-watch --dir=./ --cmd="npm test --filter=$1"
```

it replaces `$1` with the file which has changed

options

```
--dir | -d is the directory to watch, defaults to process.cwd()
--cmd | -c is the command to run, will append the file name to the end of the cmd or replaces all $1 with the file which has changed
--help | -h to get some sort of help message
```

if you don't want to execute then just stick a `#` on the end e.g. `npm test #` because `#` is just a comment right?
