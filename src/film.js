class Film{

    constructor() {
        this.films = []
    }
    addNewFilm(movieName, rRate, duration) {

        const movie = this.checkDistinct(this.films, movieName)
        if (movie != null) {
            return 'Film already exists'
        }
        //movie time range not less than a minute and more than an hour
        const validTime = this.checkValidTime(duration);
        if (validTime.hours <= 0 || validTime.mins > 60) {
            return 'Invalid duration'
        }

        const movieRestrict = ["U","PG","12","15","18"];
        const checkRating = movieRestrict.find(element => element === rRate );
        console.log('checkRating ',checkRating);
        if(checkRating===null||checkRating === undefined) {
            return 'Invalid rating'
        }
        
        this.films.push(
        { name: movieName, 
            rating: rRate, 
            duration: duration
        })
        return this.films;
    }
  
    checkValidTime(time) {
        let hours = 0, mins = 0;
        const checkedFormat = /^(\d?\d):(\d\d)$/.exec(time);

        if (checkedFormat !== null) {
            hours = parseInt(checkedFormat[1])
            mins = parseInt(checkedFormat[2])
        }

        return { hours: hours, mins: mins };

    }
    checkDistinct(array, checkName) {
        let result = null

        for (let i = 0; i < array.length; i++) {
            if (array[i].name === checkName) {
                result = array[i]
            }
        }
        return result;
    }
    
}
module.exports = Film;
const myFilms= new Film();

console.log(myFilms.addNewFilm("The Power of the Dog", "15", "2:08"));
console.log(myFilms.addNewFilm("The Power of the Dog", "15", "2:08"));
console.log(myFilms.addNewFilm("The Sexy Rabbit", "20", "2:05"));
console.log(myFilms.addNewFilm("A Hero", "U", "1:00"));
