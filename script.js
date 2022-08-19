let getQuote = document.querySelector("button");
let Quote = document.getElementById("quote");
let Author = document.getElementById("author");

getQuote.addEventListener("click", () => {
  getQuoteData()
    .then((res) => {
      showQuoteData(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

getQuoteData = () => {
  const quoteUrl = fetch("https://api.quotable.io/random");
  return quoteUrl
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

showQuoteData = (data) => {
  Quote.innerHTML = `${data["content"]}`;
  Author.innerHTML = `${data["author"]}`;

  console.log();
};
