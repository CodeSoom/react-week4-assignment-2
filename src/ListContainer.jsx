import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { data } = useSelector((state) => ({
    data: state.data,
  }));

  return (
    <ul>
      {
        data.map((datum) => (
          <List key={datum.id} datum={datum} />
        ))
      }
    </ul>
  );
}
