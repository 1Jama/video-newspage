import React from 'react';

import './Home.css';

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

  return (
    <div className='homeBox'>
      <div>
        <div className='newsFilterBox'></div>
      </div>
    </div>
  );
}
export default Home;
