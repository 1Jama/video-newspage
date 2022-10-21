import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';
import placeholder from './placeholder.jpg';
import PopUp from './PopUp';
import { extract } from 'article-parser';

const NewsPage = () => {
  const baseURL =
    'http://api.mediastack.com/v1/news?access_key=' +
    process.env.REACT_APP_ACCESS_KEY;
  const [newsData, setNewsData] = useState();
  const [newUrl, setNewUrl] = useState();
  const [open, setOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: 'placeholder',
    content: 'placeholder',
  });

  useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          languages: 'en',
          limit: 30,
          offset: 30,
        },
      })
      .then((response) => {
        setNewsData(response.data.data);
      });
  }, []);

  async function getData(aUrl) {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    var x = cors_api_url + String(aUrl);
    await extract(x).then((article) => {
      setNewArticle(article);
    });

    console.log(newArticle);
  }

  const openPopUp = (e) => {
    setNewUrl(e.url);
    getData(e.url);
    setOpen(true);
  };

  return (
    <div className='container'>
      {newsData?.map((newsStory, i) => {
        return (
          <div
            key={i}
            className='newsStory'
            onClick={() => openPopUp(newsStory)}
          >
            <a href={newsStory.url}>
              <div>
                <img
                  className='newsImage'
                  src={newsStory.image ? newsStory.image : placeholder}
                  alt=''
                />

                <p className='name'>{newsStory.title}</p>
              </div>
            </a>
          </div>
        );
      })}
      <PopUp
        trigger={open}
        setTrigger={setOpen}
        articleTitle={newArticle.title}
        articleContent={newArticle.content}
      />
    </div>
  );
};

export default NewsPage;
