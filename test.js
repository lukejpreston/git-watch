const gitWatch = require('./')

gitWatch(__dirname, (gitError, fileName, watchEvent, gitStatus) => {
    console.log(fileName, watchEvent)
})
