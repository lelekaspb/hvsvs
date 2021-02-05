const songs = [
  {
    name: "Driving home for Christmas",
    singer: "Chris Rea",
    year: 1986,
    img: "img/christmas.png",
  },
  {
    name: "Let's twist again",
    singer: "Chubby Checker",
    year: 1961,
    img: "img/twist.jpg",
  },
  {
    name: "I wanna dance with somebidy",
    singer: "Whitney Houston",
    year: 1987,
    img: "img/whitney.jpg",
  },
  {
    name: "Downtown",
    singer: "Petula Clark",
    year: 1979,
    img: "img/petulaclark.jpg",
  },
  {
    name: "Summer in the city",
    singer: "Joe Cocker",
    year: "1994",
    img: "img/summerinthecity.jpg",
  },
  {
    name: "My father's son",
    singer: "Joe Cocker",
    year: 1999,
    img: "img/myfathersson.jpg",
  },
  {
    name: "Mon mec à moi",
    singer: "Patricia Kaas",
    year: 1988,
    img: "img/patriciakaas.jpg",
  },
  {
    name: "Et si tu n'existais pas",
    singer: "Joe Dassin",
    year: 1975,
    img: "img/joedassin.jpg",
  },
  {
    name: "A million voices",
    singer: "Polina Gagarina",
    year: 2019,
    img: "img/millionvoives.jpg",
  },
  {
    name: "The river of dreams",
    singer: "Billy Joel",
    year: 1993,
    img: "img/RiverofDreams.jpg",
  },
  {
    name: "Kukushka",
    singer: "Polina Gagarina",
    year: 2015,
    img: "img/kukushka.jpg",
  },
  {
    name: "Kokomo",
    singer: "Beach boys",
    year: 1995,
    img: "img/kokomo.jpg",
  },
];

songs.forEach(showSongs);

function showSongs(song) {
  const myTemplate = document.querySelector("template").content;
  const myClone = myTemplate.cloneNode(true);
  myClone.querySelector("h1").textContent = song.name;
  myClone.querySelector(".singer").textContent = song.singer;
  myClone.querySelector(".year").textContent = song.year;
  myClone.querySelector("img").src = song.img;
  const myParentEl = document.querySelector("main");
  myParentEl.appendChild(myClone);
}
