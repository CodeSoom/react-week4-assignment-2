export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <form>
        <input
          type="text"
          placeholder="이름"
        />
        <input
          type="text"
          placeholder="분류"
        />
        <input
          type="text"
          placeholder="주소"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
