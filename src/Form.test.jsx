import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  const formState = {
    id: 100,
    title: '',
    sort: '',
    location: '',
    restaurants: [],
  };

  const { title, sort, location } = formState;
  const handleChangeInput = jest.fn();
  const handleSubmitButton = jest.fn().mockImplementation((e) => e.preventDefault());

  const renderForm = () => render(<Form
    title={title}
    sort={sort}
    location={location}
    onChange={handleChangeInput}
    onSubmit={handleSubmitButton}
  />);
  describe('Form이 렌더링된다.', () => {
    it('이름 input이 보인다.', () => {
      const { getByPlaceholderText } = renderForm();
      expect(getByPlaceholderText('이름'));
    });
    it('분류 input이 보인다.', () => {
      const { getByPlaceholderText } = renderForm();
      expect(getByPlaceholderText('분류'));
    });
    it('주소 input이 보인다.', () => {
      const { getByPlaceholderText } = renderForm();
      expect(getByPlaceholderText('주소'));
    });
    describe('input에 입력이 일어나면', () => {
      it('onChange가 일어난다.', () => {
        const { getByPlaceholderText } = renderForm();
        fireEvent.change(getByPlaceholderText('이름'), {
          target: { value: '곱창집' },
        });
        expect(handleChangeInput).toBeCalled();
      });
    });
    describe('완료버튼을 누르면', () => {
      it('submit이 된다.', () => {
        const { getByText } = renderForm();
        fireEvent.click(getByText('등록'));
        expect(handleSubmitButton).toBeCalled();
      });
    });
  });
});
