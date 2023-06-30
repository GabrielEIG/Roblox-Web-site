import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/mods.css';
import LoadingIcon from '../componets/LoadingIcon';

export const Mods = () => {
  const params = useParams();
  const [mod, setMod] = useState({});
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const getMods = async () => {
    const response = await fetch("http://localhost:3001/api/mods");
    const result = await response.json();
    let mods2 = result.filter(mod => mod.title.split(' ').join('-') === params.title);
    setMod(mods2[0]);
    setLoading(false); // Actualizar el estado de carga una vez que se obtienen los datos
  };


  const getImageUrl = (title) => {
    const jpgImageUrl = `/imgHome/${title}.jpg`;
    const pngImageUrl = `/imgHome/${title}.png`;
  
    const jpgImageExists = new Image();
    jpgImageExists.src = jpgImageUrl;
  
    if (jpgImageExists.complete) {

      console.log(jpgImageUrl)
      return jpgImageUrl;
    } else {
      const pngImageExists = new Image();
      pngImageExists.src = pngImageUrl;
  
      if (pngImageExists.complete) {
        console.log(pngImageUrl)
        return pngImageUrl;
      } else {
        return null;
      }
    }
  };
  

  useEffect(() => {
    getMods();
  }, [params.title]);
  
  

  return (
    <div className='page page-mod'>
      {loading ? ( // Mostrar el icono de carga si la variable loading es verdadera
        <LoadingIcon />
      ) : (
        <>
          <div className='mask'>
            <img src={getImageUrl(`mod-${mod.id}`)} alt='Mod' />
          </div>

          <div className='content-subtitles'>
            <h1>{mod.title}</h1>
            <p>{mod.description}</p>
            {mod.subtitle && mod.subtitle.length > 0 && (
              <React.Fragment>
                {mod.subtitle.map(sub => (
                  <React.Fragment key={sub.title}>
                    <h2>{sub.title}</h2>
                    {getImageUrl(`mod-subtitle-${sub.title.split(' ').join('-')}`) && (
                      <img src={getImageUrl(`mod-subtitle-${sub.title.split(' ').join('-')}`)} alt='Subtitle' />
                    )}
                    <p>{sub.description}</p>
                  </React.Fragment>
                ))}
              </React.Fragment>
            )}
          </div>

          <Link className='volver' to={"/"}>Volver a inicio</Link>
        </>
      )}
    </div>
  );
};
