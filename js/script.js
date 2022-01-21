"use strict";

// const quote = document.querySelector(".quote");
// const btn = document.querySelector(".btn");
// const quote__text = document.querySelector(".quote__text");
// const quote__author = document.querySelector(".quote__author");

// //Fetch API

// function getQuote() {
//     fetch("https://type.fit/api/quotes")
//         .then((res) => res.json())
//         .then((data) => {
//             let index = Math.round(Math.random() * 1643);
//             text.textContent = data[index].text;
//             author.textContent = data[index].author;
//         });
//     setTimeout(() => {
//         btn.classList.add("active");
//     }, 3000);
// }

// function newQuote(e) {
//     if (e.target.matches("button.active")) return;
//     getQuote();
//     btn.classList.remove("active");
// }

// window.addEventListener("load", getQuote);
// btn.addEventListener("click", newQuote);

// const quote = document.querySelector(".quote");
// const btn = document.querySelector(".btn");
// const quoteText = document.querySelector(".quote__text");
// const quoteAuthor = document.querySelector(".quote__author");

// function getQuote() {
//   fetch("https://type.fit/api/quotes")
//     .then((res) => res.json())
//     .then((data) => {
//       let index = Math.round(Math.random() * 1643);
//       quoteText.textContent = data[index].text;
//       quoteAuthor.textContent = data[index].author;
//     });
//   setTimeout(() => {
//     btn.classList.add("active");
//   }, 2000);
// }

// function newQuote(e) {
//   if (!e.target.matches("btn.active")) return;
//   getQuote();
//   btn.classList.remove("active");
// }

// window.addEventListener("load", getQuote);
// btn.addEventListener("click", newQuote);

const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const loader = document.querySelector(".loader");

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let index = Math.round(Math.random() * 1643);
      quoteText.textContent = data[index].text;
      quoteAuthor.textContent = data[index].author;
    });
  setTimeout(() => {
    btn.classList.add("active");
  }, 2000);
}

function newQuote(e) {
  if (!e.target.matches("button.active")) return;
  getQuote();
  btn.classList.remove("active");
}

//Loader Started

setTimeout(() => {
  loader.classList.add("opac");
},3000);
setTimeout(() => {
  loader.classList.add("none");
}, 2000);

//Loader Ended

window.addEventListener("load", getQuote);
btn.addEventListener("click", newQuote);
