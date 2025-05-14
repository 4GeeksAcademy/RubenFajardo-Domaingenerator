import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.io', '.es']

let domain = []

for (let pron of pronoun) {
  domain[0] = pron
  for (let ad of adj) {
    domain[1] = ad
    for (let n of noun) {
      domain[2] = n
      for (let e of ext){
        domain[3] = e
        console.log(domain.join(''))
      }
    }
  }
}