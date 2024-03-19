class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    // 1 variant
    //   this.#items = this.#items.filter(item => item !== itemToRemove);

    //2 variant
    const filteredItems = [];
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i] === itemToRemove) {
        continue;
      }
      filteredItems.push(this.#items[i]);
    }
    this.#items = [...filteredItems];
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
