import { render } from '@testing-library/react';
import App from './App';
import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

describe('App', () => {
  const renderApp = () => render(<App />);
  const renderInputContainer = () => render(<InputContainer />);
  const renderListContainer = () => render(<ListContainer />);

  it('header가 보인다', () => {
    const { getByText } = renderApp();
    expect(getByText('Restaurants')).not.toBeNull();
  });

  describe('InputContainer가 렌더링 된다.', () => {
    it('input이 보인다.');
  });
  describe('ListContainer가 렌더링 된다.', () => {
    it('List가 보인다.');
  });
});
