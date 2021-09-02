export default function Item({
  task: {
    title, classification, address,
  },
}) {
  return (
    <li>
      {title}
      {classification}
      {address}
    </li>
  );
}
