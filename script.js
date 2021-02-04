const book = {
  name: "Animal farm",
  author: "George Orwell",
  yearOfPublishing: "1945",
  like: true,
};

const book2 = {
  name: "Demons",
  author: "Fyodor Dostoevsky",
  yearOfPublishing: "1872",
  like: true,
};

const book3 = {
  name: "Retskrivnings og betydnings ordbog",
  author: "Politikens",
  yearOfPublishing: "2012",
  like: false,
};

//grab the template
const bookTemplate = document.querySelector("template").content;

//clone it
const copy = bookTemplate.cloneNode(true);
const copy2 = bookTemplate.cloneNode(true);
const copy3 = bookTemplate.cloneNode(true);

//change some content
/*<article class="books">
    <h1>Name</h1>
    <p class="author">Author</p>
    <p class="year">When it was first published</p>
    <p class="like">I like it</p>
  </article>
*/
copy.querySelector("h1 > span").textContent = book.name;
copy.querySelector(".author > span").textContent = book.author;
copy.querySelector(".year > span").textContent = book.yearOfPublishing;
copy.querySelector(".like > span").textContent = book.like;

copy2.querySelector("h1 > span").textContent = book2.name;
copy2.querySelector(".author > span").textContent = book2.author;
copy2.querySelector(".year > span").textContent = book2.yearOfPublishing;
copy2.querySelector(".like > span").textContent = book2.like;

copy3.querySelector("h1 > span").textContent = book3.name;
copy3.querySelector(".author > span").textContent = book3.author;
copy3.querySelector(".year > span").textContent = book3.yearOfPublishing;
copy3.querySelector(".like > span").textContent = book3.like;

//find the parent element
const daddy = document.querySelector("main");
const daddy2 = document.querySelector("main");
const daddy3 = document.querySelector("main");

//append it
daddy.appendChild(copy);
daddy2.appendChild(copy2);
daddy3.appendChild(copy3);
