const readline = require('readline-sync')

const start = () => {
    const content = {}

    const askAndReturnSearchTerm = () => {
        return readline.question('Type a Wikipedia search term: ')
    }

    const askAndReturnPrefix = () => {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    console.log(content)
}

start()