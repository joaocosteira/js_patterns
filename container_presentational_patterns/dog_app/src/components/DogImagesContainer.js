import React from "react";
import { useDogImages } from "../hooks";
import DogImages from "./DogImages"


//Class Version:


// class DogImagesContainer extends React.Component{
    
//     constructor(){
//         super();
//         this.state = {
//             dogs: []
//         }
//     }

//     componentDidMount(){
//         fetch('https://dog.ceo/api/breeds/image/random/6')
//             .then(r => r.json())
//             .then(({message}) => this.setState({ dogs: message }))
//     }


//     render(){
//         return <DogImages dogs={this.state.dogs}/>
//     }
// }


// Functional Components Version


// const DogImagesContainer =  () => {

//     const [dogs,setDogs] = useState([])

//     useEffect(()=>{
//         fetch('https://dog.ceo/api/breeds/image/random/6')
//         .then(r => r.json())
//         .then(({message}) => setDogs(message))
//     },[])

//     return(
//         <DogImages dogs={dogs}/>
//     )
// }


// Functional Components (Custom Hook Version)
/**
 * Since we already encapsulated the logic inside a Hook, 
 * Do we really need this container component?
 * - The answer is no, we could've simply delete this component 
 *   and directly use the Hook in the Presentational component
 */
const DogImagesContainer =  () => {


    const dogs = useDogImages();

    return(
        <DogImages dogs={dogs}/>
    )
}

export default DogImagesContainer;