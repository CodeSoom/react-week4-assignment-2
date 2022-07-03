import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import AddressInput from './AddressInput';

describe('<AddressInput />', () => {
  given('address', () => '');

  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderNameInput = (address = '') => render((<AddressInput address={address} onChange={handleChange} />));

  it('레스토랑 주소을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderNameInput(given.address);

    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  context('입력된 값이 없으면', () => {
    it('input이 비어있다.', () => {
      const { getByPlaceholderText } = renderNameInput(given.address);

      expect(getByPlaceholderText('주소')).toHaveDisplayValue(given.address);
    });
  });

  context('입력된 값이 있으면', () => {
    it('입력된 값이 보인다.', () => {
      given('address', () => '서울시 강남구');

      const { getByPlaceholderText } = renderNameInput(given.address);

      expect(getByPlaceholderText('주소')).toHaveDisplayValue(given.address);
    });
  });

  it('listen change event', () => {
    given('address', () => '서울시 강남구');

    const { getByPlaceholderText } = renderNameInput('');

    expect(handleChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: given.address,
      },
    });

    expect(handleChange).toBeCalledWith(given.address);
  });
});
