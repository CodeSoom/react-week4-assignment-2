import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { data } = useSelector((state) => ({

    data: state.data,
  }));
  return (
    <ul>
      {
        data.map((datum) => (
          <li>
            {' '}
            {datum.name}
            {' '}
            |
            {' '}
            {datum.category}
            {' '}
            |
            {' '}
            {datum.address}
            {' '}
          </li>
        ))
      }
    </ul>
  );
}
