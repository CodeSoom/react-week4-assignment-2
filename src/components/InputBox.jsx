import useUpdateInfo from '../hooks/useUpdateInfo';

export default function InputBox({ name }) {
  const { updateInfo } = useUpdateInfo();

  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      onBlur={(e) => updateInfo(name, e.target.value)}
    />
  );
}
