export default function List({ state }) {
    return (
        <div>
            <p>Restaurants</p>
            {JSON.stringify(state)}
        </div>
    )
}