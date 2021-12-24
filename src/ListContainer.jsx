import { useSelector } from "react-redux";
import List from "./List";

export default function ListContainer() {
  const { lists } = useSelector((state) => ({
    lists: state.registered,
  }));

  return (
    <div>
      <List lists={lists} />
    </div>
  );
}
