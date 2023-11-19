import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query = " ") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=vhzyWykycVi0E41oO7ZbMvpa32Kz1whn&rating=g`)
    
      .then(response => response.json())
      .then(({data}) => {
        setGifs(data.map(gif => ({ url: gif.images.original.url })));
      });
  }

  useEffect(() => {
    fetchGifs();
  }, []); 
  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;