import { useSelector } from "react-redux";

export default function App() {

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address
  }))

  console.log(name, category, address);

  return (
    <div>
      <form action="">
        <input type="text" name="name" placeholder="이름" id="" onChange={() => { }} value={""} />

        <input type="text" name="category" placeholder="분류" id="" onChange={() => { }} value={""} />

        <input type="text" name="address" placeholder="주소" id="" onChange={() => { }} value={""} />

        <input type="button" value="등록" />
      </form>

    </div>
  );
}
