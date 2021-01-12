import React, {useState} from 'react'

const CitySearch = (props) => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (event) => {
        const value = event.target.value;
        const new_suggestions = props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1
        })
        setQuery(value)
        setSuggestions(new_suggestions)
    }
    const handleItemClick = (suggestion) => {
        setQuery(suggestion);
        props.updateEvents(suggestion)
    }
    return (
        <div>
            <h2>City Search</h2>
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={handleInputChange}
            />
            <ul className="search-suggestions">
                {suggestions && suggestions.map((suggestion) =>
                    <li key={suggestion}
                        onClick={() => handleItemClick(suggestion)}
                    >
                        {suggestion}
                    </li>
                )}
                <li key='all' onClick={() => handleItemClick('all')}>
                    See all cities
                </li>
            </ul>
        </div>
    )
}


export default CitySearch