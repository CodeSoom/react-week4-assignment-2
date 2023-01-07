export class Restaurant {
  constructor(restaurants, { name, category, location }) {
    this.id = 100 + restaurants.at(-1).id;
    this.name = name;
    this.category = category;
    this.location = location;
  }
}

export const x = {
  //
};
