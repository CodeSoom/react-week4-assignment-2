import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => state);

  return (
    <>
      {restaurants}
    </>
  );
}
