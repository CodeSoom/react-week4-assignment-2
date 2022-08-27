export default function List({ restaurant }) {
  return (
    <li>
      {`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`}
    </li>
  );
}
