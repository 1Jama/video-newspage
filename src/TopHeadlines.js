import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';
import placeholder from './placeholder.jpg';
import PopUp from './PopUp';
import { extract } from 'article-parser';
import { Button } from 'react-bootstrap';

const TopHeadlines = (props) => {
  const [newsData, setNewsData] = useState();
  const [newUrl, setNewUrl] = useState();
  const [open, setOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: 'placeholder',
    content: 'placeholder',
  });
  const [country, setNewCountry] = useState('us');
  const [category, setNewCategory] = useState('business');

  const baseURL =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=abd3575c15954584b3129988f5042a8b';

  const filterCountryUrl = `https://newsapi.org/v2/top-headlines?country=
    ${country}&apiKey=abd3575c15954584b3129988f5042a8b`;

  const filterCatUrl = `https://newsapi.org/v2/top-headlines?category=
    ${category}&apiKey=abd3575c15954584b3129988f5042a8b`;

  const filterCatAndCountryUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=abd3575c15954584b3129988f5042a8b`;

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
  var sortBy;
  var endpointToUse;

  const countries = {
    Argentina: 'ar',
    Greece: 'gr',
    Netherlands: 'nl',
    'South Africa': 'za',
    Australia: 'au',
    'Hong Kong': 'hk',
    'New Zealand': 'nz',
    'South Korea': 'kr',
    Austria: 'at',
    Hungary: 'hu',
    Nigeria: 'ng',
    Sweden: 'se',
    Belgium: 'be',
    India: 'in',
    Norway: 'no',
    Switzerland: 'ch',
    Brazil: 'br',
    Indonesia: 'id',
    Philippines: 'ph',
    Taiwan: 'tw',
    Bulgaria: 'bg',
    Ireland: 'ie',
    Poland: 'pl',
    Thailand: 'th',
    Canada: 'ca',
    Israel: 'il',
    Portugal: 'pt',
    Turkey: 'tr',
    China: 'cn',
    Italy: 'it',
    Romania: 'ro',
    UAE: 'ae',
    Colombia: 'co',
    Japan: 'jp',
    Russia: 'ru',
    Ukraine: 'ua',
    Cuba: 'cu',
    Latvia: 'lv',
    'Saudi Arabia': 'sa',
    'United Kingdom': 'gb',
    'Czech Republic': 'cz',
    Lithuania: 'lt',
    Serbia: 'rs',
    'United States': 'us',
    Egypt: 'eg',
    Malaysia: 'my',
    Singapore: 'sg',
    Venuzuela: 've',
    France: 'fr',
    Mexico: 'mx',
    Slovakia: 'sk',
    Germany: 'de',
    Morocco: 'ma',
    Slovenia: 'si',
  };

  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

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

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const q = this.input.value;
    console.log('Your name is', q);
  };

  return (
    <div className='container'>
      <div className='newsFilterBox'>
        <select>
          <option> Language </option>
          {language.map((language) => (
            <option value={language}>{language}</option>
          ))}
        </select>
        <select>
          <option> Category </option>
          {categories.map((categories) => (
            <option value={setNewCategory}>{categories}</option>
          ))}
        </select>
        <form>
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
      {newsData?.map((newsStory, i) => {
        return (
          <div>
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

export default TopHeadlines;
