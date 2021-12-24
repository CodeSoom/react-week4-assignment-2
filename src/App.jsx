import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";

export default function App() {
  return (
    <div>
      <ListContainer state={state} />
      <InputContainer />
    </div>
  );
}
