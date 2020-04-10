const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text')
}

const start = async () => {
    const content = robots.userInput.content

    content.maximumSentences = 7

    await robots.text(content)
    console.log(JSON.stringify(content, null, 4))
}

start()
