import { createSotre } from 'redux';

import reducer from './restaurantSlice';

const store = createSotre(reducer);

export default store;
