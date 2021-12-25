const Form = ({
  title, menu, address, onClick, onChange,
}) => (
  <div>
    <input value={title} onChange={onChange} name="title" type="text" />
    <input value={menu} onChange={onChange} name="menu" type="text" />
    <input value={address} onChange={onChange} name="address" type="text" />
    <button onClick={onClick} type="button">등록</button>
  </div>
);

export default Form;
