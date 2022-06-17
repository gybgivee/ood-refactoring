class Screen {

    constructor() {
        this.screens = [];
    }
    addNewScreens(screenName, capacity) {
        const limit = 100;
        if (capacity > limit) {
            return 'Exceeded max capacity';
        }
        const screen = this.checkDistinct(this.screens, screenName);
        if (screen != null) {
            return 'Screen already exists';
        }
        this.screens.push({
            name: screenName,
            capacity: capacity
          })
          return  this.screens;
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
module.exports = Screen;
const myScreen = new Screen();
console.log(myScreen.addNewScreens('ScreenA',50));
console.log(myScreen.addNewScreens('ScreenB',70));