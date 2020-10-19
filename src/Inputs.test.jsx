import React from 'react';

import { render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const handleChangeName = jest.fn();
    const handleChangeCuisine = jest.fn();
    const handleChangeLocation = jest.fn();

    const { container } = render(
      <Inputs
        name=""
        cuisine=""
        location=""
        onChangeName={handleChangeName}
        onChangeCuisine={handleChangeCuisine}
        onChangeLocation={handleChangeLocation}
      />,
    );

    expect(container).not.toBeNull();
  });
});
