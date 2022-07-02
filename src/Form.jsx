export default function Form() {
  return (
    <form>
      <input type="text" name="name" placeholder="이름" />
      <input type="text" name="category" placeholder="분류" />
      <input type="text" name="address" placeholder="주소" />
      <input type="submit" value="등록" />
    </form>
  );
}
