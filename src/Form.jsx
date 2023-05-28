export default function Form({
  title, sort, location, onChange, onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" placeholder="이름" type="text" value={title} onChange={onChange} />
      <input name="sort" placeholder="분류" type="text" value={sort} onChange={onChange} />
      <input name="location" placeholder="주소" type="text" value={location} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}
