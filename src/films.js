const movies = require('./data');
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesDirector = array.filter(movie => movie.director === director);
  return moviesDirector;
}
getMoviesFromDirector(movies, 'Quentin Tarantino')

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director)
  let sumaScore = moviesFromDirector.reduce((total, movie) => {
  return total + movie.score
  },0);
  let average = sumaScore / moviesFromDirector.length
  return parseFloat(average.toFixed(2))
};
moviesAverageOfDirector(movies, 'Francis Ford Coppola')

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let moviesNew = array.slice()
  let orderTitle = moviesNew.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
let titles = orderTitle.map(movie => movie.title);
  return titles.slice(0, 20);
};
orderAlphabetically(movies)

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayNew = array.slice()
  let alphabeticalOrder = arrayNew.sort((a,b) => a.title > b.title ? 1 : -1)
  alphabeticalOrder.sort(function(a, b){
      if(a.year < b.year) { return -1; }
      if(a.year > b.year) { return 1; }
      return 0;
  })
  return arrayNew
  }
  orderByYear(movies)

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genero) {
  let moviesByCategory = array.filter(movie => movie.genre.includes(genero));
  let scoreCategory = moviesByCategory.reduce((total, category) => {
    return total + category.score
  },0);
  let avr = scoreCategory / moviesByCategory.length
    return parseFloat(avr.toFixed(2))
}
moviesAverageByCategory(movies, 'Western')

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = array.map(movie => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;
    const splitTime = duration.split(' ');
    splitTime.forEach(time => {
      if (time.includes("h")){
          hours = parseInt(time.replace("h", ""));
      } else if (time.includes("min")){
          minutes = parseInt(time.replace("min", ""));
      }
    });
     let totalMinutes = (hours * 60) + minutes
     return {
       ...movie,
       duration: totalMinutes
     };
});
return newArray
}
hoursToMinutes(movies)

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
