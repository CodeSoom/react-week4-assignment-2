export default function List({
  restaurantList,
}) {
  return (
    <ol>
      {restaurantList.map((restaurant) => {
        const {
          id, name, category, address,
        } = restaurant;

        return (
          <ul key={id}>
            {`${name} | ${category} | ${address}`}
          </ul>
        );
      })}
      <ul>
        시카고피자 | 양식 | 서울시 강남구
      </ul>
    </ol>
  );
}
