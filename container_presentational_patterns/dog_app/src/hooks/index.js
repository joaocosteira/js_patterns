import { useEffect, useState } from "react"

// O.G.

// export const useDogImages = () => {

//     const [dogs,setDogs] = useState([]);

//     useEffect(() => {
//         fetch('https://dog.ceo/api/breeds/image/random/6')
//             .then(r => r.json())
//             .then(({ message }) => setDogs(message))
//     },[])

//     return dogs
// }


//Async Function called within the Effect Hook.

// export const useDogImages = () => {

//     const [dogs,setDogs] = useState([]);

//     useEffect(() => {

//         async function fetchDogs(){
//             const res = await fetch('https://dog.ceo/api/breeds/image/random/6')
//             const { message } = await res.json()
//             setDogs(message)
//         }

//         fetchDogs()

//     },[])

//     return dogs
// }


// We can even use an Anonymous call:

export const useDogImages = () => {

    const [dogs,setDogs] = useState([]);

    useEffect(() => {

        (async () => {
            const res = await fetch('https://dog.ceo/api/breeds/image/random/6')
            const { message } = await res.json()
            setDogs(message)
        })()

    },[])

    return dogs
}
