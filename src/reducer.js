const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    classification: '',
    location: '',
  },
  placeholders: ['이름', '분류', '주소'],
};

export default function reducer(state = initialState) {
  return state;
}
