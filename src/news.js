import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';
import placeholder from './placeholder.jpg';
import PopUp from './PopUp';
import { extract } from 'article-parser';

const NewsPage = (props) => {
  const baseURL =
    'https://newsapi.org/v2/everything?apiKey=abd3575c15954584b3129988f5042a8b';
  const [newsData, setNewsData] = useState();
  const [newUrl, setNewUrl] = useState();
  const [open, setOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: 'placeholder',
    content: 'placeholder',
  });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNewsData(response.data.articles);
      console.log(response.data.articles);
    });
  }, []);

  async function getData(aUrl) {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    var x = cors_api_url + String(aUrl);
    await extract(x).then((article) => {
      setNewArticle(article);
    });
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
                  src={
                    newsStory.urlToImage ? newsStory.urlToImage : placeholder
                  }
                  alt=''
                />

                <p className='name'>{newsStory.title}</p>
                <p className='author'>
                  {newsStory.author} via{' '}
                  {newsStory.source.id
                    ? newsStory.source.id
                    : newsStory.source.name}
                </p>
              </div>
            </a>
          </div>
        );
      })}
      <PopUp
        trigger={open}
        setTrigger={setOpen}
        articleTitle={newArticle.title}
        articleDescription={newArticle.description}
        articleUrl={newArticle.url}
      />
    </div>
  );
};

export default NewsPage;
