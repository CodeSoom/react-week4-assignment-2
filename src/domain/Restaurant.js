export default class Restaurant {
  constructor(name, category, address) {
    this.name = name;
    this.category = category;
    this.address = address;
  }

  toJSON() {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      // eslint-disable-next-line no-param-reassign
      a[b] = this[b];
      return a;
    }, {});
  }
}
