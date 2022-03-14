/* eslint-disable react/no-array-index-key */

export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>
        {restaurants.map(({ name, category, address }, idx) => (
          <li key={`restaurant-${idx}`}>
            {`${name} | ${category} | ${address}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
