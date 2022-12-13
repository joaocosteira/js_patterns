import { useState } from "react";

const Input =  () => {

    const [value,setValue] = useState('');

    return(
        <>
            <input
                value={value}
                onChange={({target}) => setValue(target.value)}
                placeholder="Type something..."
            />
            { value.length !== 0 &&
                <p>Currently typed: {value}</p>
            }
        </>
    )
}

export default Input;