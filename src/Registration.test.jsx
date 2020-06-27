import React from 'react';

import { render } from '@testing-library/react';

import Registration from './Registration';

describe('Registration', () => {
  it('has registration detail', () => {
    const registration = {
      id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon',
    };

    const { container } = render((
      <Registration
        registration={registration}
      />
    ));

    expect(container).toHaveTextContent('Seoul Pizza');
    expect(container).toHaveTextContent('Western');
    expect(container).toHaveTextContent('Seoul Itaewon');
  });
});
