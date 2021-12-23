import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";

export default function App() {
  const state = [{
    name : "마녀피자",
    type : "양식",
    address : "서울시 강남구"
  }, {
    name: "모던한식",
    type : '한식',
    address : '부산시 해운대구'
  }]
  return (
    <div>
      <ListContainer state ={state} />
      <InputContainer />
    </div>
  );  
}
