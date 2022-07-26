import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  function submit(event) {
    event.preventDefault();
    return null;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <form>
        <input type="text" name="restaurant-name" />
        <input type="text" name="restaurant-type" />
        <input type="text" name="restaurant-location" />
        <button type="submit" onClick={submit}>등록</button>
      </form>
    </div>
  );
}
