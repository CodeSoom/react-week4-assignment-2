import React from 'react';

import { render } from '@testing-library/react';

import AddForm from './AddForm';

describe('AddForm', () => {
  function renderAddForm() {
    return render((
      <AddForm />
    ));
  }

  it('input, button을 보여준다.', () => {
    const { queryByText, getByPlaceholderText } = renderAddForm();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(queryByText(/등록/)).not.toBeNull();
  });
});
