/**
 * This is a Presentational Layer:
 * We Receive a list of dogs and simply render 
 * those on the screen (via images)
 */

//Since we have a custom hook with logic, we could've call the dog hook here 
// and delete the Container component.
const DogImages = ({ dogs }) => dogs.map((dog,i) => <img key={i} src={dog} alt={`Dog #${i}`}/>)
export default DogImages;