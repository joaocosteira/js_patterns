import { useHover } from './hooks'
import withLoader from './withLoader'


const DogImages = (props) => {
    
    const [hoverRef,hovering] = useHover();

    return (

        <div ref={hoverRef} {...props}>
            { hovering && <div id="hover">Hovering!</div>}
            <div id="list">
                {
                    props.data.message.map((dog,i) => (
                        <img src={dog} alt={`Dog #${i}`} key={i} />
                    ))
                }
            </div>
        </div>

    )
}

export default withLoader(DogImages,"https://dog.ceo/api/breed/labrador/images/random/6")