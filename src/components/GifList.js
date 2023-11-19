import React from 'react';

function GifList(props) {
  return (
    <ul>
      {props.gifs.map((gif, index) => <li key={index}><img src={gif.url} alt="gif" /></li>)}
    </ul>
  );
}

export default GifList;