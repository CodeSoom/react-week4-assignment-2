export default class Restaurant {
  constructor(name, category, address) {
    this.name = name;
    this.category = category;
    this.address = address;
  }

  static toJsonWith(state) {
    return new Restaurant(state.name, state.category, state.address).toJSON();
  }

  toJSON() {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      // eslint-disable-next-line no-param-reassign
      a[b] = this[b];
      return a;
    }, {});
  }
}
