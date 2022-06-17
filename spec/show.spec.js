const Screen = require('../src/screen');
const Film = require('../src/film.js');
const Show = require('../src/show.js');
describe("Screen", function () {

    let myScreen, myFilms;

    beforeEach(() => {
        myScreen = new Screen();
        myScreen.addNewScreens('ScreenA', 50);
        myScreen.addNewScreens('ScreenB', 50);
        myFilms = new Film();
        myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        myFilms.addNewFilm("A Hero", "U", "1:00");
        myFilms.addNewFilm("Mr.& Mrs.Cat", "U", "1:15");
        myShow = new Show(myFilms, myScreen);
    });

    it("Add first show", function () {
        const expected =
            [
                {
                    screenName: 'ScreenA',
                    film: 'The Power of the Dog',
                    rate: '15',
                    duration: '2:08',
                    startTime: '10:00',
                    endTime: '12:28'
                }
            ]
        const result = myShow.addShow( 'The Power of the Dog','ScreenA',"10:00");
        expect(result).toEqual(expected);
    });

    it("Add show at unavailable time", function () {
        const expected = "Unavilable : the next available time is 12:28";
        myShow.addShow( 'The Power of the Dog','ScreenA',"10:00");
        const result = myShow.addShow( 'A Hero','ScreenA',"12:00")
        expect(result).toEqual(expected);
    });

    it("Add multiple show to multiple Screen", function () {
        const expected =
        [
            {
              screenName: 'ScreenA',
              film: 'The Power of the Dog',
              rate: '15',
              duration: '2:08',
              startTime: '10:00',
              endTime: '12:28'
            },
            {
              screenName: 'ScreenA',
              film: 'A Hero',
              rate: 'U',
              duration: '1:00',
              startTime: '12:50',
              endTime: '14:10'
            },
            {
              screenName: 'ScreenB',
              film: 'Mr.& Mrs.Cat',
              rate: 'U',
              duration: '1:15',
              startTime: '10:00',
              endTime: '11:35'
            }
          ]

        myShow.addShow( 'The Power of the Dog','ScreenA',"10:00");
        myShow.addShow( 'A Hero','ScreenA',"12:50");
        const result = myShow.addShow( 'Mr.& Mrs.Cat','ScreenB',"10:00");
        console.log('Result: ' + result);
        expect(result).toEqual(expected);
    });
    

});