import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import CategoryInput from './CategoryInput';

describe('<CategoryInput />', () => {
  given('category', () => '');

  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderCategoryInput = (category = '') => render((<CategoryInput category={category} onChange={handleChange} />));

  it('input이 보인다.', () => {
    const { getByPlaceholderText } = renderCategoryInput('');

    expect(getByPlaceholderText('분류')).toBeInTheDocument();
  });

  context('입력된 값이 없으면', () => {
    it('input이 비어있다.', () => {
      const { getByPlaceholderText } = renderCategoryInput('');

      expect(getByPlaceholderText('분류')).toHaveDisplayValue('');
    });
  });

  context('입력된 값이 있으면', () => {
    it('입력된 값이 보인다.', () => {
      given('category', () => '한식');

      const { getByPlaceholderText } = renderCategoryInput(given.category);

      expect(getByPlaceholderText('분류')).toHaveDisplayValue(given.category);
    });
  });

  it('listen change event', () => {
    given('category', () => '한식');

    const { getByPlaceholderText } = renderCategoryInput('');

    expect(handleChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: given.category,
      },
    });

    expect(handleChange).toBeCalledWith(given.category);
  });
});
