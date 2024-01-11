let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "The only thing we have to fear is fear itself." ,
    person: 'Franklin D. Roosevelt'
}, {
    quote: "You miss 100% of the shots you don't take." ,
    person: 'Wayne Gretzky'
}, {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
    person: 'Nelson Mandela'
}, {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
    person: 'Winston Churchill'
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today."  ,
    person: 'Franklin D. Roosevelt'
}, {
    quote: "The only way to do great work is to love what you do." ,
    person: 'Steve Jobs'
}, ];

btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;

});