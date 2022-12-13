import withLoader from "./withLoader"

const DogImages = ({ data }) => (
    data.message.map((dog,i) => (
        <img src={dog} alt={`Dog #${i}`} key={i} />
    ))
)

export default withLoader(DogImages,"https://dog.ceo/api/breed/labrador/images/random/6")