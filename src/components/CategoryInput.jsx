export default function CategoryInput({ category, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input type="text" placeholder="분류" value={category} onChange={handleChange} />
  );
}
