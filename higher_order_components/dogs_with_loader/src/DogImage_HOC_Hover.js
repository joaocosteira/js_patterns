import withLoader from './withLoader'
import withHover from './withHover'

const DogImages = (props) => (

    <div {...props}>
        { props.hovering && <div id="hover">Hovering!</div>}
        <div id="list">
            {
                props.data.message.map((dog,i) => (
                    <img src={dog} alt={`Dog #${i}`} key={i} />
                ))
            }
        </div>
    </div>

)

export default withHover(withLoader(DogImages,"https://dog.ceo/api/breed/labrador/images/random/6"))