import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleSubmit = jest.fn();
  let renderComponent;

  beforeEach(() => {
    handleChangeName.mockClear();
    handleChangeCategory.mockClear();
    handleChangeAddress.mockClear();
    handleSubmit.mockClear();
    renderComponent = ({ name = '', category = '', address = '' }) => render(
      <RestaurantForm
        name={name}
        category={category}
        address={address}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onSubmit={handleSubmit}
      />,
    );
  });

  it('renders name', () => {
    const testName = 'testName';
    const { getByLabelText } = renderComponent({ name: testName });

    expect(getByLabelText('이름')).toHaveValue(testName);
  });

  it('renders category', () => {
    const testCategory = 'testCategory';
    const { getByLabelText } = renderComponent({ category: testCategory });

    expect(getByLabelText('분류')).toHaveValue(testCategory);
  });

  it('renders address', () => {
    const testAddress = 'testAddress';
    const { getByLabelText } = renderComponent({ address: testAddress });

    expect(getByLabelText('주소')).toHaveValue(testAddress);
  });

  context('when input name is changed', () => {
    it('calls onChangeName', () => {
      const testName = 'testName';
      const { getByLabelText } = renderComponent({});

      fireEvent.change(getByLabelText('이름'), { target: { value: testName } });

      expect(handleChangeName).toHaveBeenCalledWith(testName);
    });
  });

  context('when input category is changed', () => {
    it('calls onChangeCategory', () => {
      const testCategory = 'testCategory';
      const { getByLabelText } = renderComponent({});

      fireEvent.change(getByLabelText('분류'), {
        target: { value: testCategory },
      });

      expect(handleChangeCategory).toHaveBeenCalledWith(testCategory);
    });
  });

  context('when input address is changed', () => {
    it('calls onChangeAddress', () => {
      const testAddress = 'testAddress';
      const { getByLabelText } = renderComponent({});

      fireEvent.change(getByLabelText('주소'), {
        target: { value: testAddress },
      });

      expect(handleChangeAddress).toHaveBeenCalledWith(testAddress);
    });
  });

  context('when submit button is clicked', () => {
    it('calls onChangeSubmit', () => {
      const testName = 'testName';
      const testCategory = 'testCategory';
      const testAddress = 'testAddress';
      const { getByText } = renderComponent({
        name: testName,
        category: testCategory,
        address: testAddress,
      });

      fireEvent.click(getByText('등록'));

      expect(handleSubmit).toHaveBeenCalledWith({
        name: testName,
        category: testCategory,
        address: testAddress,
      });
    });
  });
});
