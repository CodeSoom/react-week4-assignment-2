import Item from './Item';

export default function List({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p>레스토랑 정보가 없어요!</p>
    );
  }

  return (
    <ol>
      <Item key={tasks.id} task={tasks} />
    </ol>
  );
}
