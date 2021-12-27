/* 계획
1. 아래 input 컴포넌트가 보인다
2. 인풋을 change하고 click하는 기능이 바르게 작동한다
+3. 인풋의 value값을 바르게 받아온다
*/
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';
import { changeInput, registerInput } from './actions';
import { initialState } from './reducer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('render input Component', () => {
    useSelector.mockImplementation((selector) => selector(initialState));
    const { getByText } = render(<InputContainer />);

    expect(getByText(/등록/)).not.toBeNull();
  });

  context('when input changes', () => {
    it('dispatch change action', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      const { getByPlaceholderText } = render(<InputContainer />);

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '마녀피자' },
      });

      expect(dispatch).toBeCalledWith(changeInput('마녀피자', 'name'));
      // expect(getByDisplayValue("마녀피자")); <- 마녀피자의 value는 리덕스로부터 받아온다
    });
  });

  context('when input submit', () => {
    it('dispatch register action', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith(registerInput());
    });
  });

  // useEffect가 필요한 원인?
  // it("show select", () => {
  //   useSelector.mockImplementation((selector) =>
  //     selector({
  //       changed: {
  //         name: "마녀피자",
  //         type: "양식",
  //         address: "",
  //       },
  //     })
  //   );
  //   const { getByDisplayValue } = render();

  //   expect(getByDisplayValue(/마녀피자/)).not.toBeNull();
  // });
});
