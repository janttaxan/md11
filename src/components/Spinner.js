export default class Spinner {
  constructor() {
    this.spinner = document.getElementById('spinner');
  }

  turnOn() {
    this.spinner.classList.add('active');
  }

  turnOff() {
    this.spinner.classList.remove('active');
  }
}
