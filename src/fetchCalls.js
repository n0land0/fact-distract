const fetchCalls = {
  getNewFact(language) {
    return fetch(`https://uselessfacts.jsph.pl/random.json?language=${language}`)
      .then(response => {
        this.checkResponse(response);
        return response.json();
      })
      .then(factObj => factObj.text)
      .then(factText =>
        this.cleanResponse(factText)
      )
  },

  cleanResponse(fact) {
    // streamline punctuation & break up obnoxiously long words
    return fact.trim().split('').map((char, index, array) => {
      if (char === "`") {
        char = "'"
      } else if ((char === "." || char === "!" || char === ",") && index >= array.length - 2) {
        char = ""
      }
      return char
    }).join('').split(' ').map(word => {
      if (word.length > 20) {
        word = word.substr(0, 20) + '-' + word.substr(20, 20)  + '-' + word.substr(40, 20)  + '-' + word.substr(60, word.length)
      }
      return word
    }).join(' ')
  },

  checkResponse(response) {
    if (!response.ok) {
      console.log(response)
      if (response.status === 422 || response.status === 403) {
        throw new Error('Sorry, we can\'t find an account with these credentials. Please try again.')
      } else if (response.status === 404) {
        throw new Error('The page you are looking for doesn\'t exist')
      } else if (response.status >= 500) {
        throw new Error('We\'re having issues on our end. Please try again later.')
      } else {
        throw new Error('Please check your network connection')
      }
    }
  }
}

export default fetchCalls;
