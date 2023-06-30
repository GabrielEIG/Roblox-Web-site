import React from 'react';
import { FaDiscord, FaYoutube, FaTelegram } from 'react-icons/fa';
import '../styles/adds.css'

export const Advertisement = () => {
  return (
    <div className='adds-component'>
      <h2>Advertisement</h2>
      <div className='social-icons'>
        <a href='https://discord.com/' target='_blank' rel='noopener noreferrer'>
          <FaDiscord />
        </a>
        <a href='https://www.youtube.com/@OXBABEL' target='_blank' rel='noopener noreferrer'>
          <FaYoutube />
        </a>
        <a href='https://telegram.org/' target='_blank' rel='noopener noreferrer'>
          <FaTelegram />
        </a>
      </div>
    </div>
  );
};
