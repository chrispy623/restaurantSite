/*script for navbar - start*/
const menuIcon = document.querySelector('.navbar-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
     navbar.classList.toggle('change');                             
});
/*script for navbar - end*/
/*script for critics - start*/

const quotes = [
  {quote:"Went in for lunch one day - it's a sit down place, but you can get stuff to go. Best black bean burger I've ever eaten, hands down. Really good fries as well. They have different recommended pairings for each burger and I just went with the one that was next to the black bean.",
  name:"- Lawrence"}, 
  {quote:"My husband and I love it here and it's a great place to bring the grandkids for healthy burgers and fries - one large order of fries serves the whole table. It's comforting to know all the food served is organic and vegetarian choices are delicious! There's a great weekday lunch special, too.",
  name:"- Jane"},
  {quote:"As a vegetarian, it's always hard to find good burgers. This restaurant not only has vegetarian options, but they are all excellent. The service is wonderful and they are willing to work with you to find the best combination to put on your burger. Give this place a try and you won't be disappointed. Did I mention they also have fried pickles? Get those too.",
  name:"- Eileen"},
  {quote:"Great experience. Excellent service. The server greeted us right away. Communicated throughout our entire time. Checked in on us and made sure we had everything we wanted. Took time to explain the menu and the ability to customize everything.   Food was delicious. The fries were fantastic.",
  name:"- Shay"}
];

const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

window.onload(quoteDisplay());

function quoteDisplay() {
  let i = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[i].quote;
    quoteAuthor.innerHTML = quotes[i].name;
    setTimeout(quoteDisplay, 3000);
  }


/*script for critics - end*/
