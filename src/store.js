import { configureSore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureSore({ reducer });

export default store;
