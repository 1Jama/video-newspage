import React from 'react';

import './Home.css';
import { Button } from 'react-bootstrap';

function Home() {
  const language = [
    'en',
    'ar',
    'de',
    'es',
    'fr',
    'he',
    'it',
    'nl',
    'no',
    'pt',
    'ru',
    'sv',
    'ud',
    'zh',
  ];
  var sortBy;
  var searchIn;
  var dateFrom;
  var dateTo;
  var endpointToUse;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const q = this.input.value;
    console.log('Your name is', q);
  };

  return (
    <div className='homeBox'>
      <div>
        <div className='newsFilterBox'>
          <select>
            <option> Language </option>
            {language.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select>
          <form>
            <label>
              Search:
              <input type='text' value={searchIn} defaultValue='Search...' />
            </label>
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Home;
