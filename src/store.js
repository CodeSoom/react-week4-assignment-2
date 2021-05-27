import { createSore } from 'redux';

import reducer from './reducer';

const store = createSore(reducer);

export default store;
