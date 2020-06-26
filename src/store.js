import { creatoreStore } from 'redux';

import reducer from './reducer';

const store = creatoreStore(reducer);

export default store;
