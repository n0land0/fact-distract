const fetchCalls = {
  getNewFact(language) {
    return fetch(`https://uselessfacts.jsph.pl/random.json?language=${language}`)
      .then(response => response.json())
      .then(factObj => factObj.text)
      // .then(factText =>
      //   factText.split('').map(char => {
      //     if (char === '`') {
      //       return `'`
      //     } else if (char === '.' || '!') {
      //       return ''
      //     } else {
      //       return char
      //     }
      //   }).join('')
      // )
  }
}

export default fetchCalls;
