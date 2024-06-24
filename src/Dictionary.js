import { useState } from 'react';

const Dictionary = () => {
    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState("");
    const dictionaryData =
        [
            { word: "React", meaning: "A JavaScript library for building user interfaces." },
            { word: "Component", meaning: "A reusable building block in React." },
            { word: "State", meaning: "An object that stores data for a component." }
        ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredData = dictionaryData.find(item => item.word.toLowerCase() === searchText.toLowerCase());
        if (filteredData) {
            setResult(filteredData.meaning);
        } else {
            setResult("Word not found in the dictionary.");
        }
    }

    return (
        <div>
            <h1>Dictionary App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="searchText" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button type='submit' id="searchButton">Search</button>
            </form>
            <br />
            <b>Definition:</b>
            <p>{result}</p>

        </div>
    )
}

export default Dictionary;