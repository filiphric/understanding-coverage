const $ = document.querySelector.bind(document)
const { randomFact } = require("./randomFact");

$('button').addEventListener('click', () => {
  randomFact().then( (text) => {
      $('p').textContent = text
  });
})