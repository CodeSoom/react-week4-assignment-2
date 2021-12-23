import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

// Button test
// 목적: 클릭했을 때 onChange hanlder를 호출하는가?

// Button: onClickAddInfo
// 1. when clicks "등록" button
//  - calls onClick handler

describe('Button', () => {
  const handleClick = jest.fn();

  const renderButton = () => render(
    <Button
      onClickAddInfo={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when clicks "등록" button', () => {
    it('calls onClick handler', () => {
      const { getByText } = renderButton();

      fireEvent.click(getByText('등록'));

      expect(handleClick).toBeCalled();
    });
  });
});
