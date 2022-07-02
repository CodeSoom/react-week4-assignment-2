import { render } from '@testing-library/react';

import NameInput from './NameInput';

describe('<NameInput />', () => {
  const renderNameInput = (name = '') => render((<NameInput name={name} />));

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderNameInput('');

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  context('입력된 이름이 있으면', () => {
    it('입력된 이름이 보인다.', () => {
      const { getByPlaceholderText } = renderNameInput('마녀주방');

      expect(getByPlaceholderText('이름')).toHaveDisplayValue('마녀주방');
    });
  });
});
