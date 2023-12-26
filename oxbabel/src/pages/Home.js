import React, { useEffect, useState } from "react";
import ImageCarousel from "../componets/ImageCarousel";
import "../styles/home.css";
import { ModsList, WorkList } from "../componets/WorkList";
import LoadingIcon from "../componets/LoadingIcon";

const Home = () => {
  const [videos, setvideos] = useState([]);
  const [mods, setmods] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDatas = async () => {
    const response = await fetch(
      "https://robloxbabel.onrender.com/api/tendencias"
    );
    const result = await response.json();
    setvideos(result);
    setLoading(false);
  };

  const getMods = async () => {
    const response = await fetch("https://robloxbabel.onrender.com/api/mods");
    const result = await response.json();
    setmods(result);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
    getMods();
  }, []);

  return (
    <div className="page home-page">
      <section>
        <h1>Últimos Videos Recomendados!!</h1>
        {loading ? <LoadingIcon /> : <WorkList videos={videos} />}
        <h1>Descubre lo que te interesa!!</h1>
        {loading ? <LoadingIcon /> : <ModsList mods={mods} />}
      </section>
    </div>
  );
};

export default Home;
