'use strict';
console.log(document.querySelector('.message').textContent);


/* What is DOM
Dom is document object model:structured  representation of html doc. allows js to accept html element and allow them to manipulate


stored in tree structure and each tag is one object

document.querySelector() is not part of js

it's part of web apis (which are libraries written in js )
*/

//selecting and manipualte some more elemnts
document.querySelector('.message').textContent='Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;

document.querySelector('.score').textContent=20;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value=23;

//handling click of button

