export default function App() {
  const handleChange = () => {

  };

  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        <input
          id="input-name"
          type="text"
          placeholder="이름"
          value=""
          onChange={handleChange}
        />
        <input
          id="input-classification"
          type="text"
          placeholder="분류"
          value=""
          onChange={handleChange}
        />
        <input
          id="input-address"
          type="text"
          placeholder="주소"
          value=""
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
