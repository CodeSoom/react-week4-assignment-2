export default class Restaurant {
  constructor(name, category, address) {
    this.name = name;
    this.category = category;
    this.address = address;
  }

  toJSON() {
    return undefined;
  }
}
