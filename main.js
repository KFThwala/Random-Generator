let btn = document.getElementById("btn");
let quotes = document.getElementById("quotes");
let author = document.getElementById("author")

const url = "https://api.quotable.io/random"

const getQuote = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
      quotes.innerText = item.content;

      author.innerText = `~ ${item.author}`
      

    })
};

window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)