import Item from './Item';

export default function List({ list }) {
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
