import { render } from '@testing-library/react';
import InputContainer from './InputContainer';

const renderInputContainer = () => render((
  <InputContainer />
));

describe('InputContainer', () => {
  it('renders 3 text-box', () => {
    const { queryAllByRole } = renderInputContainer();

    expect(queryAllByRole('textbox')).toHaveLength(3);
  });

  it('renders placeholder', () => {
    const { queryByPlaceholderText } = renderInputContainer();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('renders button', () => {
    const { queryByRole } = renderInputContainer();

    expect(queryByRole('button')).not.toBeNull();
  });
});
