export default function Form({ information, onChange, onSubmit }) {
  const { name, classification, address } = information;

  return (
    <form onSubmit={onSubmit}>
      <input id="name" type="text" placeholder="이름" value={name} onChange={onChange} />
      <input id="classification" type="text" placeholder="분류" value={classification} onChange={onChange} />
      <input id="address" type="text" placeholder="주소" value={address} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}
