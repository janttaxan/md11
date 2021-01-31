export default class ErrorMessage {
  constructor(message) {
    this.message = message;
  }

  showError() {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('red-text');
    errorMessage.innerText = `Ошибка: ${this.message}`;
    return errorMessage;
  }
}
