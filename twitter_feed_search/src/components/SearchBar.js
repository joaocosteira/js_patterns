const SearchBar = ({ filterText,inThisLocation,setFilterText,setInThisLocation }) => (
        <form>
            <input 
                type="text" 
                placeholder="Search..."
                value={filterText}
                onChange={({target}) => setFilterText(target.value)}
            />
            <p>
                <label htmlFor="">
                    <input 
                        type="checkbox"
                        checked={inThisLocation} 
                        onChange={({target}) => setInThisLocation(target.checked)}
                    />
                    {' '}
                    Only Show Tweets in your current location
                </label>
            </p>
        </form>
    )


export default SearchBar;