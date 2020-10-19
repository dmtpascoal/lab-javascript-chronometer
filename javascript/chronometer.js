class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    const increment = () => {
      this.currentTime = this.currentTime + 1;
    }
    this.intervalId = setInterval(increment, 1000);
  }
  getMinutes() {
    Math.floor(this.currentTime / 60);
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }
  stopClick() {
    this.intervalId = clearInterval(this.currentTime);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}
