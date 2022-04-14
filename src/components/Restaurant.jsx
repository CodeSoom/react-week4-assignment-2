export default function Restaurant({ restaurant }) {
  return (
    <li>
      {`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`}
    </li>
  );
}
