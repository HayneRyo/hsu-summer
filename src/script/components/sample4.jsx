import React, { useState } from 'react';

export default () => {
  const [keyword, setKeyword] = useState('');
  const [apiKey] = useState('AIzaSyBWM8sJVyiRQ-1kywgZiGoQEvIZXWv9etE');
  const [items, setItems] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${keyword}&part=snippet&maxResults=12`;
    // ajax
    fetch(url)
      .then(res => res.json())
      .then(json => setItems(json.items));
  }

  return (
    <section className='container'>
      <h2>YouTubeとりに行くでぇ😋</h2>
      <form {...{onSubmit}}>
        <input type='text' value={keyword} onChange={e => setKeyword(e.target.value)} />
        <button type='submit' className='sample4__submit'>探す</button>
      </form>
      <ul className='sample4__list'>
        {!!items.length && items.map((item, key) =>
          <li className='sample4__item' {...{key}}>
            <img src={item.snippet.thumbnails.default.url} className='sample4__image' />
            <div className='sample4__inner'>
              <h3>{item.snippet.title}</h3>
              <p>{item.snippet.description}</p>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
}
