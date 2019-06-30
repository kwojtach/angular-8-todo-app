export class DataService {
  saveData(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getData() {
    return JSON.parse(localStorage.getItem('todos'));
  }
}
