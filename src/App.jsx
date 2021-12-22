import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  console.log(name, category, address);

  function handleChangeNameValue(event) {
    // console.log(event.target.value)
    dispatch({
      type: 'handleChangeNameValue',
      payload: {
        name: event.target.value,
      },
    });
  }
  function handleChangeCategroryValue(event) {
    dispatch({
      type: 'handleChangeCategroryValue',
      payload: {
        category: event.target.value,
      },
    });
  }
  function handleChangeAddressValue(event) {
    dispatch({
      type: 'handleChangeAddressValue',
      payload: {
        address: event.target.value,
      },
    });
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="이름"
          id=""
          onChange={handleChangeNameValue}
          value={name}
        />

        <input
          type="text"
          name="category"
          placeholder="분류"
          id=""
          onChange={handleChangeCategroryValue}
          value={category}
        />

        <input
          type="text"
          name="address"
          placeholder="주소"
          id=""
          onChange={handleChangeAddressValue}
          value={address}
        />

        <input
          type="button"
          value="등록"
        />

      </form>

    </div>
  );
}
