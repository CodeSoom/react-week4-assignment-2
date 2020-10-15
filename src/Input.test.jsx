import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderInput = (inputState = {}) => render((
    <Input
      onChange={handleChange}
      onClick={handleClick}
      inputState={inputState}
    />
  ));

  describe('when typing text', () => {
    context('with typed text', () => {
      const { container } = renderInput();

      it('render typed text', () => {

      });

      it('calls onChange function', () => {

      });
    });

    context('with not typed text', () => {
      const { container } = renderInput();

      it('not render any text', () => {

      });
    });
  });

  describe('등록 button', () => {
    context('when click', () => {
      it('calls onClick function', () => {

      });

      it('Empty all input value', () => {

      });
    });
  });
});
