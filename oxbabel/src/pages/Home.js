import React, { useEffect, useState } from 'react'
import ImageCarousel from '../componets/ImageCarousel';
import '../styles/home.css'
import { ModsList, WorkList } from '../componets/WorkList';


const Home = () => {

  const [videos, setvideos] = useState([]);
  const [mods, setmods] = useState([]);



  const getDatas = async () => {
    const response = await fetch("http://localhost:3001/api/tendencias");
    const result = await response.json();
    setvideos(result);
  };

  const getMods = async () => {
    const response = await fetch("http://localhost:3001/api/mods");
    const result = await response.json();
    setmods(result);
  };

  useEffect(()=>{
    getDatas();
    getMods();
  },[])



  return (
    <div className='page home-page'>

        

        <section>
          <h1>Últimos Videos Recomendados!!</h1>
          <WorkList videos={videos}/>

          <h1>Descubre lo que te interesa!!</h1>
          <ModsList mods={mods}/>
        </section>

    </div>
  )
}


export default Home;