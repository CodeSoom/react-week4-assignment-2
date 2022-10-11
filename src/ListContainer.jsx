import { useSelector } from 'react-redux';

import Item from './Item';

export default function ListContainer() {
  const { list } = useSelector((state) => ({
    list: state.list,
  }));

  if (list.length === 0) {
    return <></>;
  }

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
