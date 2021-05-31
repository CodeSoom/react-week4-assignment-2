import useRestaurantField from '../hooks/useRestaurantField';

export default function InputBox({ name }) {
  const { setRestaurantField } = useRestaurantField();

  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      onBlur={(e) => setRestaurantField(name, e.target.value)}
    />
  );
}
