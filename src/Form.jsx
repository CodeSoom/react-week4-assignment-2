import Input from './Input';

export default function Form({ onClick }) {
  function handleChange() {
    //
  }

  return (
    <form>
      <Input
        id="name"
        placeholder="이름"
        onChange={handleChange}
      />
      <Input
        id="category"
        placeholder="분류"
        onChange={handleChange}
      />
      <Input
        id="address"
        placeholder="주소"
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </form>
  );
}
