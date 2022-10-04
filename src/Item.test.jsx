import { render } from "@testing-library/react";

describe('Item', () => {
  const item = {
    id: 1,
    name: '백암',
    category: '순댓국',
    address: '여의도',
  };

  const { getByText } = render((
    <Item item={item} />
  ));

  expect(getByText('백암')).not.toBeNull();
  expect(getByText('순댓국')).not.toBeNull();
  expect(getByText('여의도')).not.toBeNull();
});
