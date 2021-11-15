const fetchCalls = {
  getNewFact(language) {
    return fetch(`https://uselessfacts.jsph.pl/random.json?language=${language}`)
      .then(response => response.json())
      .then(factObj => factObj.text)
      .then(factText =>
        factText.trim().split('').map((char, index, array) => {
          if (char === "`") {
            char = "'"
          } else if ((char === "." || char === "!") && index >= array.length - 2) {
            char = ""
          }
          return char
        }).join('')
        .split(' ').map(word => {
          if (word.length > 20) {
            word = word.substr(0, word.length/2) + '-' + word.substr(word.length/2, word.length)
          }
          return word
        }).join(' ')
      )
  },

  cleanResponse(fact) {
    // streamline punctuation & break up obnoxiously long words
    return fact.trim().split('').map((char, index, array) => {
      if (char === "`") {
        char = "'"
      } else if ((char === "." || char === "!") && index >= array.length - 2) {
        char = ""
      }
      return char
    }).join('').split(' ').map(word => {
      if (word.length > 20) {
        word = word.substr(0, 20) + '-' + word.substr(20, 20)  + '-' + word.substr(40, 20)  + '-' + word.substr(60, word.length)
      }
      return word
    }).join(' ')
  }
}

export default fetchCalls;
