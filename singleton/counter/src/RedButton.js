import Counter from './Counter';

const RedButton = ({ setCount }) => {

    return(
        <button 
            className="btn btn-red"
            onClick={() => { 
                Counter.increment(); 
                setCount(Counter.getCount()) 
            }}
        >
            Red {Counter.getCount()}
        </button>
    )
}

export default RedButton;