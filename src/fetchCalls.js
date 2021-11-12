const fetchCalls = {
  getNewFact(language) {
    return fetch(`https://uselessfacts.jsph.pl/random.json?language=${language}`)
      .then(response => response.json())
      // .then(factObj => )

  }
}

export default fetchCalls;
