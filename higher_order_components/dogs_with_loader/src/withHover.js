import { useState } from "react";


export default function withHover(Element){

    return props => {
        const [hovering,setHovering] = useState(false);

        return(
            <Element
                {...props}
                hovering={hovering}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            />
        )
    }
}