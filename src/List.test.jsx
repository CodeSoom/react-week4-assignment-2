import { render } from '@testing-library/react';
import List from './List';

describe('ListContainer', () => {
  const {
    id, title, sort, location,
  } = {
    id: 1,
    title: '파리바게트',
    sort: '빵집',
    location: '구로',
  };

  it('리스트들이 보인다', () => {
    const renderListContainer = () => render(<List
      id={id}
      title={title}
      sort={sort}
      location={location}
    />);
    const { getByText } = renderListContainer();
    expect(getByText('파리바게트')).not.toBeNull();
    expect(getByText('빵집')).not.toBeNull();
    expect(getByText('구로')).not.toBeNull();
  });
});
