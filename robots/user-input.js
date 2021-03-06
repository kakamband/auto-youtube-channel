const readline = require('readline-sync')
const state = require('./state')

const robot = () => {

    const content = {
    maximumSentences: 7
    }

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
    state.save(content)
}

module.exports = robot