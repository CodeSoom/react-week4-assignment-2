import { render } from '@testing-library/react';

import Input from './Form';

describe('<Form/>', () => {
  const renderForm = () => render((
    <Input />
  ));

  it('3 개의 입력창 보인다', () => {
    const { getAllByRole } = renderForm();

    expect(getAllByRole('textbox')).toHaveLength(3);
  });

  it('등록 버튼이 보인다', () => {
    const { getByText } = renderForm();

    expect(getByText(/등록/)).not.toBeNull();
  });
});
