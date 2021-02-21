import { createSotre } from 'redux';

import reducer from './reducer';

const store = createSotre(reducer);

export default store;
