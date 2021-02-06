const songs = [
  {
    name: "Driving home for Christmas",
    singer: "Chris Rea",
    year: 1986,
    img: "img/christmas.png",
    youtubeLink:
      "https://www.youtube.com/watch?v=DDt3u2Ev1cI&ab_channel=TheOldrecordclub",
  },
  {
    name: "Let's twist again",
    singer: "Chubby Checker",
    year: 1961,
    img: "img/twist.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=rsaJF0mPJ_Q&ab_channel=jaraguaschool",
  },
  {
    name: "I wanna dance with somebody",
    singer: "Whitney Houston",
    year: 1987,
    img: "img/whitney.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=eH3giaIzONA&ab_channel=whitneyhoustonVEVO",
  },
  {
    name: "Downtown",
    singer: "Petula Clark",
    year: 1979,
    img: "img/petulaclark.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=Zx06XNfDvk0&ab_channel=ALHASHS",
  },
  {
    name: "Summer in the city",
    singer: "Joe Cocker",
    year: "1994",
    img: "img/summerinthecity.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=6Hxz6qJi-9k&ab_channel=mushroomvideos",
  },
  {
    name: "My father's son",
    singer: "Joe Cocker",
    year: 1999,
    img: "img/myfathersson.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=i8WoZOdin-k&ab_channel=BEAUTY3125",
  },
  {
    name: "N'oubliez Jamais",
    singer: "Joe Cocker",
    year: 1997,
    img: "img/noubliezjamais.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=MBpyuYgfCWA",
  },
  {
    name: "Mon mec à moi",
    singer: "Patricia Kaas",
    year: 1988,
    img: "img/patriciakaas.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=4zgB1Jfpjdw&ab_channel=AlexDoomi",
  },
  {
    name: "Et si tu n'existais pas",
    singer: "Joe Dassin",
    year: 1975,
    img: "img/joedassin.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=abfQQ1hzN9M&ab_channel=VOB",
  },
  {
    name: "A million voices",
    singer: "Polina Gagarina",
    year: 2019,
    img: "img/millionvoives.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=Q2gbKglCL5s&ab_channel=EurovisionSongContest",
  },
  {
    name: "The river of dreams",
    singer: "Billy Joel",
    year: 1993,
    img: "img/RiverofDreams.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=hSq4B_zHqPM&ab_channel=billyjoelVEVO",
  },
  {
    name: "Kukushka",
    singer: "Polina Gagarina",
    year: 2015,
    img: "img/kukushka.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=T1Co32bmmRw&ab_channel=%E8%8A%92%E6%9E%9CTV%E9%9F%B3%E4%B9%90%E9%A2%91%E9%81%93MGTVMusicChannel",
  },
  {
    name: "Kokomo",
    singer: "Beach boys",
    year: 1995,
    img: "img/kokomo.jpg",
    youtubeLink:
      "https://www.youtube.com/watch?v=TadZubd0YSo&ab_channel=That%27sMusic",
  },
  {
    name: "Skibidi",
    singer: "Little Big",
    year: 2018,
    img: "img/skibidi.gif",
    youtubeLink: "https://www.youtube.com/watch?v=mDFBTdToRmw",
  },
  {
    name: "Bomfunk MC's",
    singer: "Freestyler",
    year: 1999,
    img: "img/bomfunkmcs.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=ymNFyxvIdaM",
  },
  {
    name: "Butterfly",
    singer: "Crazy town",
    year: 1999,
    img: "img/butterfly.png",
    youtubeLink: "https://www.youtube.com/watch?v=6FEDrU85FLE",
  },
  {
    name: "Haru Mamburu",
    singer: "Nogu Sveló!",
    year: 1993,
    img: "img/mamburu.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=VNKvtA9AkjI",
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
  myClone.querySelector("a").href = song.youtubeLink;
  const myParentEl = document.querySelector("main");
  myParentEl.appendChild(myClone);
}
