import Restaurant from './Restaurant';

export default class RestaurantState {
  constructor(name, category, address, restaurants) {
    this.name = name;
    this.category = category;
    this.address = address;
    this.restaurants = restaurants;
  }

  static initJson() {
    return new RestaurantState('', '', '', []).toJSON();
  }

  static toJsonWith(state) {
    return new RestaurantState(
      '',
      '',
      '',
      [...state.restaurants, Restaurant.toJsonWith(state)],
    ).toJSON();
  }

  toJSON() {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      // eslint-disable-next-line no-param-reassign
      a[b] = this[b];
      return a;
    }, {});
  }
}
