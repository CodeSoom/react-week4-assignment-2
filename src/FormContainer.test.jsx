import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마녀주방',
      classification: '한식',
      location: '서울시 강남구',
    },
    placeholders: ['이름', '분류', '주소'],
  }));

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  it('renders restaurant', () => {
    const { getByDisplayValue } = renderFormContainer();

    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
  });

  it('renders “등록” button to add task', () => {
    const { getByText } = renderFormContainer();

    expect(getByText(/등록/)).not.toBeNull();
  });
});
