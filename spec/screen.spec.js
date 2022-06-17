const Screen = require("../src/screen");
describe("Screen", function () {

    let myScreen;

    beforeEach(() => {
        myScreen = new Screen();
    })
    it("Add a new Screen", function () {
        const expected =
            [
                { name: 'ScreenA', capacity: 50 }
            ]
        const result = myScreen.addNewScreens('ScreenA', 50);
        expect(result).toEqual(expected);
    });
    it("Add a new Screen Repeated Screen", function () {
        const expected = "Screen already exists";
        myScreen.addNewScreens('ScreenA', 50);
        const result = myScreen.addNewScreens('ScreenA', 50);
        expect(result).toEqual(expected);
    });
    it("Add 2 new Screens", function () {
        const expected =
            [
                { name: 'ScreenA', capacity: 50 },
                { name: 'ScreenB', capacity: 70 }
            ]
        myScreen.addNewScreens('ScreenA', 50);
        const result = myScreen.addNewScreens('ScreenB', 70);
        expect(result).toEqual(expected);
    });
    it("Add Screens with exceed capacity", function () {
        const expected = "Exceeded max capacity";

        const result = myScreen.addNewScreens('ScreenA', 150);
        expect(result).toEqual(expected);
    });


});