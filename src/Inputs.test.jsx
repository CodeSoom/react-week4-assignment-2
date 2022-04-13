import { render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  it('renders restaurant inputs', () => {
    const { queryByPlaceholderText } = render((
      <Inputs />
    ));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });
});
