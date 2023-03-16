/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomDomain() {
  const domains = [".com", ".org", ".net", ".io", ".co", ".me"];
  const words = ["apple", "banana", "orange", "grape", "kiwi", "pineapple"];
  let domainName = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    domainName += word;
  }

  const randomIndex = Math.floor(Math.random() * domains.length);
  const domain = domains[randomIndex];
  domainName += domain;

  return domainName;
}
window.onload = function() {
  let l = generateRandomDomain();
  console.log(l);
  document.querySelector("#the-domain").innerHTML = l;
};

console.log("Hello Rigo from the console!");
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-domain").innerHTML = generateRandomDomain();
});

const myDomain = generateRandomDomain();
console.log(myDomain);
