const axios = require('axios')

module.exports.randomFact = async () => {
  const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(function (response) {
      return response.data.text
  })

  return res;
}