import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const baseURL =
    'http://api.mediastack.com/v1/news?access_key=' +
    process.env.REACT_APP_ACCESS_KEY;
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          languages: 'en',
          countries: 'ca',
          limit: 30,
          offset: 30,
        },
      })
      .then((response) => {
        setNewsData(response.data.data);
      });
  }, []);

  return (
    <div className='container'>
      {newsData?.map((newsStory, i) => {
        return (
          <div key={i}>
            <a href={newsStory.url}>
              <div>
                <img className='image' src={newsStory.image} alt='' />

                <p className='name'>{newsStory.title}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPage;
