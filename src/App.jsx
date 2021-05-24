export default function App() {
  const data = [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
    // {
    //   id: 2, name: '시카고피자', category: '양식', address: '이태원동',
    // },
    // {
    //   id: 2, name: '키와미', category: '일식', address: '분당구 정자동',
    // },
  ];
  return (
    <>
      <h1>
        Restaurants
      </h1>

      <label htmlFor="input-name">
        이름
      </label>
      <input
        id="name"
        type="text"
        placeholder="이름"
      />

      <label htmlFor="input-category">
        분류
      </label>
      <input
        id="category"
        type="text"
        placeholder="분류"
      />

      <label htmlFor="input-address">
        주소
      </label>
      <input
        id="address"
        type="text"
        placeholder="주소"
      />

      <ul>
        <li>
          {data[0].name}
          {data[0].category}
          {data[0].address}
        </li>
      </ul>
    </>
  );
}
