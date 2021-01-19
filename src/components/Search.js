import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      axios.get('https://jsonapi.org/articles').then(d => {
        console.log(d)
        setResult(d.data)
      })

    })();


  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
          {result}
        </div>
      </div>
    </div>
  );
};

export default Search;
