import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('restaurant list', () => {
    context('when initial state', () => {
      it('is empty', () => {
        const { container } = render(
          <App />,
        );

        expect(container).not.toHaveTextContent('식당');
      });
    });
  });

  describe('restaurant registration', () => {
    it('has 3 inputs for name, category, and address', () => {
      const { getByPlaceholderText } = render(
        <App />,
      );

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });

    it('has add button', () => {
      const { getByText } = render(
        <App />,
      );

      expect(getByText('등록')).not.toBeNull();
    });

    context('when inputs are typed', () => {
      it('changes its value', () => {
        const { getByPlaceholderText } = render(
          <App />,
        );

        fireEvent.change(getByPlaceholderText('이름'), { target: { value: '마녀주방' } });
        expect(getByPlaceholderText('이름')).toHaveValue('마녀주방');

        fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분식' } });
        expect(getByPlaceholderText('분류')).toHaveValue('분식');

        fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울시 강남구' } });
        expect(getByPlaceholderText('주소')).toHaveValue('서울시 강남구');
      });
    });

    context('when button is clicked', () => {
      it('resets 3 inputs, regists a restaurant', () => {
        const { getByText, getByPlaceholderText } = render(
          <App />,
        );

        fireEvent.change(getByPlaceholderText('이름'), { target: { value: '마녀주방' } });
        fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분식' } });
        fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울시 강남구' } });

        fireEvent.click(getByText('등록'));

        expect(getByPlaceholderText('이름')).toHaveValue('');
        expect(getByPlaceholderText('분류')).toHaveValue('');
        expect(getByPlaceholderText('주소')).toHaveValue('');

        expect(getByText(/마녀주방/)).not.toBeNull();
        expect(getByText(/분식/)).not.toBeNull();
        expect(getByText(/서울시 강남구/)).not.toBeNull();
      });
    });
  });
});
