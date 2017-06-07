const simpleGit = require('simple-git')
const watch = require('node-watch')
const path = require('path')

module.exports = (dir, callback) => {
    console.log('watching:', dir)
    const git = simpleGit(dir)

    git.status((gitError) => {
        if (gitError === null) watch(dir, (watchEvent, fileName) => {
            git.status((gitError, gitStatus) => {
                if (gitError) console.error(gitError)
                const files = gitStatus.files.map(file => file.path).map(file => path.resolve(dir, file))
                if (files.includes(fileName)) callback(gitError, fileName, watchEvent, gitStatus)
            })
        })
    })
}
