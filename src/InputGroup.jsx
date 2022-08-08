export default function InputGroup() {
  return (
    <>
      <form action="">
        <span>
          <label htmlFor="storeName" style={{ fontSize: 0 }}>
            이름
          </label>
          <input placeholder="이름" id="storeName" type="text" />
        </span>
        <span>
          <label htmlFor="storeName" style={{ fontSize: 0 }}>
            분류
          </label>
          <input placeholder="분류" id="storeName" type="text" />
        </span>
        <span>
          <label htmlFor="storeName" style={{ fontSize: 0 }}>
            주소
          </label>
          <input placeholder="주소" id="storeName" type="text" />
        </span>
        <button type="submit">등록</button>
      </form>
    </>
  );
}
