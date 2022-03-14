import Input from './Input';

// 목적: input에 id, placeholder, value를 넣을 수 있다

test('Input', () => {
  const handleChange = jest.fn();

  const renderInput = () => {
    <Input
      id=""
      placeholder=""
      value=""
      onChange={handleChange}
    />;
  };

  renderInput();
});
