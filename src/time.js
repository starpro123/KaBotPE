export default class Time {
  constructor() {
    let today = new Date();
    let sliceEnd = today.toLocaleTimeString().lastIndexOf(":");
    this.timeInf = today.toLocaleTimeString().slice(0, sliceEnd);
  }

  //get() => 오후 10:24
  get() {
    this.init();
    return this.timeInf;
  }

  init() {
    let today = new Date();
    let sliceEnd = today.toLocaleTimeString().lastIndexOf(":");
    this.timeInf = today.toLocaleTimeString().slice(0, sliceEnd);
  }
}
