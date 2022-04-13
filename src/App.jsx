export default function App() {
  const restaurantList = [
    {
      id: 1, name: '시카고피자', category: '양식', address: '서울시 강남구',
    },
  ];

  return (
    <div>
      Hello
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
    </div>
  );
}
