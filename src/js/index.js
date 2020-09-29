/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let suit = generateSuit();

  if (suit == "&hearts;" || suit == "&diams;") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bot-suit").style.color = "red";
  }

  document.querySelector("#top-suit").innerHTML = suit;
  document.querySelector("#the-num").innerHTML = generatenum();
  document.querySelector("#bot-suit").innerHTML = suit;
};

let generateSuit = () => {
  let cardsuit = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  let cardsuitr = Math.floor(Math.random() * cardsuit.length);
  return cardsuit[cardsuitr];
};

let generatenum = () => {
  let cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let cardNumi = Math.floor(Math.random() * cardNum.length);
  return cardNum[cardNumi];
};
