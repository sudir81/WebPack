export class ComponentService {
  constructor() {
    this.numberOne = document.getElementById("numberOne");
    this.numberTwo = document.getElementById("numberTwo");
    this.addBtn = document.getElementById("addValues");
    this.results = document.getElementById("result");
  }

  getInputs() {
    return [this.numberOne.value, this.numberTwo.value];
  }

  setResult(str) {
    this.results.innerText = str;
  }

  onClick(event) {
    this.addBtn.addEventListener("click", event);
  }
}
