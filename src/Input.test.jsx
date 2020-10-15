import React from 'react';

import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const inputRender = () => render((
    <Input />
  ));
});
