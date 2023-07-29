import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results.js';
import Photos from './Photos.js';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('sunset');
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let shecodesKey = '157ed0b5eb96387a704f272o2f9ct6b8';

    let shecodesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesKey}`;
    axios.get(shecodesUrl).then(handlePexelsResponse);

    // let pexelsApiKey =
    //   '563492ad6f917000010000011a396fa64aab4d59950e84d7288fb234';
    // let headers = {Authorization: `Bearer ${pexelsApiKey}`};

    // let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    // axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row justify-content-end">
          <form className="col-3" onSubmit={handleSubmit}>
            <input onChange={handleKeyword} type="text" placeholder="Search" />
          </form>
        </div>
        <Results results={results} />
        <br></br>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
