export default function InputContainer() {
  return (
    <div>
      <label htmlFor="input-name">이름</label>
      <input
        id="input-name"
        type="text"
        placeholder="이름"
      />
      <label htmlFor="input-category">분류</label>
      <input
        id="input-category"
        type="text"
        placeholder="분류"
      />
      <label htmlFor="input-address">주소</label>
      <input
        id="input-address"
        type="text"
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
