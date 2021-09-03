import { useSelector } from 'react-redux';

import List from '../presentational/List';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => state);

  return (
    <>
      {restaurants.map(({ id, title }) => (
        <List
          key={id}
          value={title}
        />
      ))}
    </>
  );
}
