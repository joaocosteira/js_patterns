
const Count = ({ count, increment, decrement }) => (
    <div className="counter">
        <div className="btns">
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        <p>Current count value: {count}</p>
    </div>
)

export default Count;