import React, { useEffect, useState } from 'react';
import { WorkList } from '../componets/WorkList';
import '../styles/tendencias.css';
import LoadingIcon from '../componets/LoadingIcon';

const Tendencias = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDatas = async () => {
    const response = await fetch("http://localhost:3001/api/tendencias");
    const result = await response.json();
    setVideos(result);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className='page tendencia-page'>
      <h2>Videos y temas tendencias</h2>
      {loading ? (
        <LoadingIcon />
      ) : (
        <WorkList videos={videos} />
      )}
    </div>
  );
};

export default Tendencias;
