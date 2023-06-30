import React from 'react';
import { Link } from 'react-router-dom';

export const WorkList = ({ limit, videos }) => {
  return (
    <section className='works'>
      {videos.slice(0, limit).map(video => (
        <article key={video.id} className='workItem'>
          <div className='mask'>
            <Link to={video.url} target='_blank' rel='noopener noreferrer'>
              <img src={'imgHome/tendencia-' + video.id + '.jpg'} />
            </Link>
          </div>
          <span>{video.event}</span>
          <h2>
            <Link to={video.url} target='_blank' rel='noopener noreferrer'>
              {video.name}
            </Link>
          </h2>
        </article>
      ))}
    </section>
  );
};

export const ModsList = ({ limit, mods }) => {
  return (
    <section className='works'>
      {mods.map(mod => (
        <article key={mod.id} className='workItem'>
          <div className='mask'>
            <Link to={'mods/' + mod.title.split(' ').join('-')}>
              <img src={'imgHome/mod-' + mod.id + '.jpg'} />
            </Link>
          </div>
          <h2>
            <Link
              to={'mods/' + mod.title.split(' ').join('-')}
            >
              {mod.title}
            </Link>
          </h2>
        </article>
      ))}
    </section>
  );
};
