import { render } from "@testing-library/react";

describe('List', () => {
  it('renders task', () => {
    const list = [
      {
        id: 1,
        name: '백암순대',
        category: '순댓국',
        address: '영등포구',
      },
    ];

    const { getByText } = render((
      <List list={list} />
    ));

    expect(getByText('백암순대')).not.toBeNull();
    expect(getByText('순댓국')).not.toBeNull();
    expect(getByText('영등포구')).not.toBeNull();
  });

  it('renders blank space', () => {
    const list = [];

    const { asFragment } = render((
      <List list={list} />
    ));

    expect(asFragment()).toMatchInlineSnapshot(`
    <></>
  `);
  });
});
