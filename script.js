
let movies = [
  {
    title: "Mean Girls",
    genre: "Comedy",
    description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    poster: "https://m.media-amazon.com/images/I/81tfKGHZ3UL._AC_UY218_.jpg"
  },
  {
    title: "The Shining",
    genre: "Horror",
    description: "A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence. At the same time, his psychic son sees horrifying forebodings from both the past and the future.",
    poster: "https://m.media-amazon.com/images/I/81y2UbA-YjL._AC_UY218_.jpg"
  },
  {
    title: "Alien",

genre: "Horror",
    description: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg"
  },
  {
    title: "The Wizard of Oz",
    genre: "Musical",
    description: "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.",
    poster: "https://m.media-amazon.com/images/I/9104SZs19ML._AC_UY218_.jpg"
  },
  {
    title: "Look Into My Eyes",
    genre: "Documentary",
    description: "A documentary through a series of intimate sessions with psychics and their clients.",

    poster: "https://m.media-amazon.com/images/I/71+5iftogwL._AC_UY218_.jpg"
  }
];

function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

document.getElementById("generate-button").addEventListener("click", function () {
  const randomMovie = getRandomMovie(movies);
  document.getElementById("movie-output").textContent =
    `${randomMovie.title} - ${randomMovie.genre}: ${randomMovie.description}`;
  document.getElementById("movie-poster").src = randomMovie.poster;
});
