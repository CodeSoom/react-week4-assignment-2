import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  it('입력 창과 등록 버튼을 보여준다', () => {
    const { getByTestId, getByText } = render((
      <InputContainer />
    ));

    expect(getByTestId(/name/)).not.toBeNull();
    expect(getByTestId(/category/)).not.toBeNull();
    expect(getByTestId(/address/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
