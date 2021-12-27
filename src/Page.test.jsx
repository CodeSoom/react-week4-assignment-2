/* import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

// Page test
// 목적: App으로부터 받은 정보는 무엇이며, 제대로 동작하는가?

// Page: onChangeTitle, onClickAddInfo, infos, infoTitle
// 1. with input
//  - calls onChange handler
// 2. when click "등록" button
//  - calls onClick handler
//  - renders text(이름, 분류, 주소)

describe('Page', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const infos = [
    { id: 1, title: '모토쿠라시' },
    { id: 2, title: '일식' },
    { id: 3, title: '송파구' },
  ];
  const infoTitle = '';

  const renderPage = () => render(
    <Page
      onChangeTitle={handleChange}
      onClickAddInfo={handleClick}
      infos={infos}
      infoTitle={infoTitle}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with input', () => {
    it('calls onChange handler', () => {
      const { getByPlaceholderText } = renderPage();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '모토쿠라시' },
      });
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '일식' },
      });
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '송파구' },
      });

      expect(handleChange).toBeCalled();
    });
  });

  context('when click "등록" button', () => {
    it('calls onClick handler', () => {
      const { getByText } = renderPage();

      fireEvent.click(getByText('등록'));

      expect(handleClick).toBeCalled();
    });

    it('renders text', () => {
      const { container, getByText } = renderPage();

      fireEvent.click(getByText('등록'));

      expect(container).toHaveTextContent('모토쿠라시 일식 송파구');
    });
  });
}); */
