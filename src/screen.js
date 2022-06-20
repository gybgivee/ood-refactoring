class Screen {

    constructor() {
        this.screens = [];
    }
    addNewScreens(screenName, capacity) {
        const limit = 100;
        if (capacity > limit) {
            return 'Exceeded max capacity';
        }
        let screen = null;
        screen = this.screens.find(element=> element.name === screenName);
        if (screen != null) {
            return 'Screen already exists';
        }
        this.screens.push({
            name: screenName,
            capacity: capacity
          })
          return  this.screens;
    }
  
}
module.exports = Screen;
const myScreen = new Screen();
console.log(myScreen.addNewScreens('ScreenA',50));
console.log(myScreen.addNewScreens('ScreenB',70));