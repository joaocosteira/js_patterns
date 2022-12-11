import Counter from './Counter'

const BlueButton = ({setCount}) => {
    return(
        <button 
            className="btn btn-blue"
            onClick={() => { 
                Counter.increment(); 
                setCount(Counter.getCount()) 
            }}
            >
            Blue {Counter.getCount()}
        </button>
    )
}

export default BlueButton;