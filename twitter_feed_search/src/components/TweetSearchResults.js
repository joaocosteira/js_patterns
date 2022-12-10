import { useState } from "react";
import SearchBar from "./SearchBar";
import TweetList from "./TweetList";

const TweetSearchResults = ({ tweets }) => {

    const [filterText,setFilterText] = useState('')
    const [inThisLocation,setInThisLocation] = useState(false)

    return(
        <>
            <SearchBar
                filterText={filterText}
                inThisLocation={inThisLocation}
                setFilterText={setFilterText}
                setInThisLocation={setInThisLocation}
            />
            <TweetList
                tweets={tweets}
                filterText={filterText}
                inThisLocation={inThisLocation}
            />
        </>
    )
}

export default TweetSearchResults;