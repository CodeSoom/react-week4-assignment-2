import { fireEvent, render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  it('renders restaurant inputs', () => {
    const { queryByPlaceholderText } = render((
      <Inputs />
    ));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens for change event on update restaurant name', () => {
    const onChangeName = jest.fn();

    const { getByPlaceholderText } = render((
      <Inputs
        onChangeName={onChangeName}
      />
    ));

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: '한우마을' } },
    );

    expect(onChangeName).toBeCalledWith('한우마을');
  });
});
