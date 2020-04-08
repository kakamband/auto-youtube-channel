const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text')
}

const start = async () => {
    const content = robots.userInput.content

    await robots.text(content)
    console.log(content)
}

start()
