import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import AddForm from './AddForm';

/**
 * input이 렌더링되는지?
 * button이 렌더링되는지?
 * input change event가 실행되는지?
 * button click event가 실행되는지?
 */

describe('AddForm', () => {
  const handleChageInput = jest.fn();

  const handleClickAddButton = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderAddForm(restaurantInformation) {
    return render((
      <AddForm
        restaurantInformation={restaurantInformation}
        onChangeInput={handleChageInput}
        onClickAddButton={handleClickAddButton}
      />
    ));
  }

  context('without restaurantInformation', () => {
    it('renders input placeholder', () => {
      const restaurantInformation = {
        name: '',
        category: '',
        address: '',
      };

      const { getByPlaceholderText } = renderAddForm(restaurantInformation);

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });

  context('with restaurantInformation', () => {
    it('renders input value', () => {
      const restaurantInformation = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      };

      const { getByDisplayValue } = renderAddForm(restaurantInformation);

      expect(getByDisplayValue('마녀주방')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
    });
  });

  it("renders '등록' button", () => {
    const restaurantInformation = {
      name: '',
      category: '',
      address: '',
    };

    const { getByText } = renderAddForm(restaurantInformation);

    expect(getByText('등록')).not.toBeNull();
  });

  it('listens change events', () => {
    const restaurantInformation = {
      name: '',
      category: '',
      address: '',
    };

    const { getByPlaceholderText } = renderAddForm(restaurantInformation);
    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: '서울 강남구',
      },
    });

    expect(handleChageInput).toBeCalled();
  });

  it('listens click event', () => {
    const restaurantInformation = {
      name: '',
      category: '',
      address: '',
    };

    const { getByPlaceholderText, getByText } = renderAddForm(restaurantInformation);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: '서울 강남구',
      },
    });

    fireEvent.click(getByText('등록'));

    expect(handleClickAddButton).toBeCalled();
  });
});
