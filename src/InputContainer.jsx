export default function InputContainer() {
  return ((
    <div>
      <input name="name" placeholder="이름" />
      <input name="category" placeholder="분류" />
      <input name="address" placeholder="주소" />
      <button type="submit">등록</button>
    </div>
  ));
}
