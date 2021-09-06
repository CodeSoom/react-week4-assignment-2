import Item from './Item';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, title }) => (
        <Item
          key={id}
          title={title}
        />
      ))}
    </ul>
  );
}
