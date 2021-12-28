import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  let renderComponent;

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
    renderComponent = ({ value }) => render(
      <RestaurantForm
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  });

  it('renders name', () => {
    const testName = 'testName';
    const { getByLabelText } = renderComponent({ value: { name: testName } });

    expect(getByLabelText('이름')).toHaveValue(testName);
  });

  it('renders category', () => {
    const testCategory = 'testCategory';
    const { getByLabelText } = renderComponent({ value: { category: testCategory } });

    expect(getByLabelText('분류')).toHaveValue(testCategory);
  });

  it('renders address', () => {
    const testAddress = 'testAddress';
    const { getByLabelText } = renderComponent({ value: { address: testAddress } });

    expect(getByLabelText('주소')).toHaveValue(testAddress);
  });

  context('when input name is changed', () => {
    it('calls onChange', () => {
      const testName = 'testName';
      const { getByLabelText } = renderComponent({ value: {} });

      fireEvent.change(getByLabelText('이름'), { target: { value: testName } });

      expect(handleChange).toHaveBeenCalledWith({ name: testName });
    });
  });

  context('when input category is changed', () => {
    it('calls onChangeCategory', () => {
      const testCategory = 'testCategory';
      const { getByLabelText } = renderComponent({ value: {} });

      fireEvent.change(getByLabelText('분류'), {
        target: { value: testCategory },
      });

      expect(handleChange).toHaveBeenCalledWith({ category: testCategory });
    });
  });

  context('when input address is changed', () => {
    it('calls onChangeAddress', () => {
      const testAddress = 'testAddress';
      const { getByLabelText } = renderComponent({ value: {} });

      fireEvent.change(getByLabelText('주소'), {
        target: { value: testAddress },
      });

      expect(handleChange).toHaveBeenCalledWith({ address: testAddress });
    });
  });

  context('when submit button is clicked', () => {
    it('calls onChangeSubmit', () => {
      const testName = 'testName';
      const testCategory = 'testCategory';
      const testAddress = 'testAddress';
      const { getByText } = renderComponent({
        value: {
          name: testName,
          category: testCategory,
          address: testAddress,
        },
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
