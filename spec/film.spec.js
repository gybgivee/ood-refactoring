const Film = require("../src/film");
describe("Film", function () {

    let myFilms;

    beforeEach(() => {
        myFilms = new Film();
    })
    it("Add a new Film",function () {
        const expected = 
        [
            { name: 'The Power of the Dog', rating: '15', duration: '2:08' }
        ]
        const result = myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        expect(result).toEqual(expected);
    });
    it("Add a new Film Repeated Film",function () {
        const expected = "Film already exists";
        myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        const result = myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        expect(result).toEqual(expected);
    });
    it("Add 2 new Films",function () {
        const expected = 
        [
            { name: 'The Power of the Dog', rating: '15', duration: '2:08' },
            { name: 'A Hero', rating: 'U', duration: '1:00' }
        ]
        myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        const result = myFilms.addNewFilm("A Hero", "U", "1:00");
        expect(result).toEqual(expected);
    });
    it("Add a type of rating that not allow in the cinema",function () {
        const expected = "Invalid rating";
        myFilms.addNewFilm("The Power of the Dog", "15", "2:08");
        myFilms.addNewFilm("A Hero", "U", "1:00");
        const result =  myFilms.addNewFilm("The Sexy Rabbit", "20", "2:05");
        expect(result).toEqual(expected);
    });
    

});