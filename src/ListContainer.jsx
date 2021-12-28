import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { reastaurantInfoList } = useSelector((state) => ({
    reastaurantInfoList: state.data,
  }));

  return (
    <ul>
      {
        reastaurantInfoList.map((datum) => (
          <List key={datum.id} datum={datum} />
        ))
      }
    </ul>
  );
}
