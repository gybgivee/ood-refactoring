class Show {
    constructor(Films, Screen) {
        this.shows = [];
        this.screen = Screen.screens;
        this.films = Films.films;

    }
    addShow(movieName, screenName, startTime) {

        //It takes 20 minutes to clean the screen so add on 20 minutes to the duration 
        //when working out the end time
       
        let movie = null;
        movie = this.films.find(element => element.name === movieName);
    
        if (movie === null) {
            return 'Film not exists'
        }
        const expectedStart = this.checkValidTime(startTime);
        if (expectedStart.hours <= 0 || expectedStart.mins > 60) {
            return 'Invalid start time'
        }
        const isEndAfterMidnight = this.checkMidnightEnd(expectedStart);
        if(isEndAfterMidnight){
            return 'Invalid start time - film ends after midnight'
        }

        
        //************************************************* */
        let screen=null;
        screen = this.screen.find(element => element.name === screenName);
        if (screen === null) {
            return 'Screen not exists'
        }

     

        for (let i = 0; i < this.shows.length; i++) {
            const screenEnd = this.checkValidTime(this.shows[i].endTime);
            console.log('check', typeof expectedStart.hours, expectedStart, screenEnd);
            if (this.shows[i].screenName === screenName) {
                if (expectedStart.hours > screenEnd.hours ||
                    expectedStart.hours === screenEnd.hours && expectedStart.mins < screenEnd.mins) {
                    return "Unavilable : the next available time is " + this.shows[i].endTime;
                }
            }
        }

        //Add the new start time and end time to the showing
        this.shows.push({
            screenName: screenName,
            film: filmDetails.name,
            rate: filmDetails.rating,
            duration: filmDetails.duration,
            startTime: startTime,
            endTime: durationHours + ":" + durationMins
        })
        return this.shows;


    }
    checkMidnightEnd(expectedStart){
        const extraTime = 20;
        let result =false;
        const filmDetails = this.films.find(element => element.name === movieName);
        const duration = this.checkValidTime(filmDetails.duration);
        let durationHours = expectedStart.hours + duration.hours;
        let durationMins = expectedStart.mins + duration.mins + extraTime;
        if (durationMins >= 60) {
            durationHours += Math.floor(durationMins / 60)
            durationMins = durationMins % 60
        }
        if (durationHours >= 24) {
            result=true;
        }
        return result;
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
    setTimeFormat(hours, mins) {

        const newDate = new Date()
        newDate.setMilliseconds(0)
        newDate.setSeconds(0)
        newDate.setMinutes(mins)
        newDate.setHours(hours)

        return newDate;

    }
    movieShowToday() {
        return this.shows;
    }

}
module.exports = Show;

const Screen = require('./screen.js');
const Film = require('./film.js');
const myScreen = new Screen();
myScreen.addNewScreens('ScreenA', 50);
myScreen.addNewScreens('ScreenB', 50);
const myFilms = new Film();
myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
myFilms.addNewFilm("A Hero", "U", "1:00");
myFilms.addNewFilm("Mr.& Mrs.Cat", "U", "1:15");
const myShow = new Show(myFilms, myScreen);
//console.log(myShow.addShow('The Power of the Dog', 'ScreenA', "10:00"));
//console.log(myShow.addShow('A Hero', 'ScreenA', "12:50"));
//console.log(myShow.addShow( 'Mr.& Mrs.Cat','ScreenB',"10:00"));

console.log(myShow.addShow('The Power of the Dog', 'ScreenA', "10:00"));
console.log(myShow.addShow('A Hero', 'ScreenA', "12:00"));
