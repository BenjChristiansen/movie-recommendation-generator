let movies = [
  { title: "Mean Girls", 
genre: "Comedy",
description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George."
},
  { title: "The Shining", 
genre: "Horror",
description: "A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence. At the same time, his psychic son sees horrifying forebodings from both the past and the future."
},
  { title: "Alien", 
genre: "Horror",
description: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform."
},
  { title: "The Wizard of Oz", 
genre: "Musical",
description: "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes."
},
  { title: "Look Into My Eyes", 
genre: "Documentary",
description: "A documentary through a series of intimate sessions with psychics and their clients."
}]
  function getRandomMovie(movies){
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
  }
  document.getElementById("generate-button").addEventListener("click", function() {
    const randomMovie = getRandomMovie(movies);
    document.getElementById("movie-output").textContent = `${randomMovie.title} - ${randomMovie.genre}: ${randomMovie.description}`;
