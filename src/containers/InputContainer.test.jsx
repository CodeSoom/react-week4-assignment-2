import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('<InputContainer />', () => {
  const renderInputContainer = () => render((<InputContainer />));

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });
});
