export default function AddressInput({ address, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input
      type="text"
      placeholder="주소"
      name="address"
      value={address}
      onChange={handleChange}
    />
  );
}
