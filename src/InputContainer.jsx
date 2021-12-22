export default function InputContainer() {
  return (
    <form>
      <input type="text" placeholder="이름" name="title" />
      <input type="text" placeholder="분류" name="category" />
      <input type="text" placeholder="주소" name="address" />
      <button type="submit">등록</button>
    </form>
  );
}
