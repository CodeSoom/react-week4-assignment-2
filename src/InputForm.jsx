import Input from './Input';

export default function InputForm({ onChange, data }) {
  return (
    <>
      <Input
        division="이름"
        data={data?.name}
        inputName="name"
        onChange={onChange}
      />
      <Input
        division="분류"
        data={data?.category}
        inputName="category"
        onChange={onChange}
      />
      <Input
        division="주소"
        data={data?.address}
        inputName="address"
        onChange={onChange}
      />
    </>
  );
}
