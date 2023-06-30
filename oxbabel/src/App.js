import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./componets/Menu";
import Home from "./pages/Home";
import Guia from "./pages/Guia";
import Tendencias from "./pages/Tendencias";
import Eventos from "./pages/Eventos";
import Comunidad from "./pages/Comunidad";
import "./App.css";


import { Footer } from "./componets/Footer";
import { Advertisement } from "./componets/Advertisement";
import { FaChrome, FaCircleNotch } from "react-icons/fa";
import { Error } from "./pages/Error";
import { Mods } from "./pages/Mods";
import CookieNotice from "./componets/CookieNotice";

const routes = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
  },
  {
    path: "/productos",
    element: <Guia />,
    label: "Guía",
  },
  {
    path: "/tendencias",
    element: <Tendencias />,
    label: "Tendencias",
  },
  {
    path: "/eventos",
    element: <Eventos />,
    label: "Eventos",
  },
  {
    path: "/comunidad",
    element: <Comunidad />,
    label: "Comunidad",
  },
  {
    path: "/mods/:title",
    element: <Mods />
  },
  {
    path: "*",
  element: <Error />,
  },
  
  
];

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRouteChangeStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="content-icon-oxbabel">
            <div className="oxbael-icon">
              <img src="/imgHome/icon-oxbabel.jpg"></img>
              <h3 className="oxbabel-title">babel</h3>
            </div>
            
          </div>
          <Menu routes={routes} />
          <div className="content-app">
            {isLoading ? (
              // Renderizar el icono de carga mientras isLoading sea true
              <div className="loading-icon">
                <FaCircleNotch />
              </div>
            ) : (
              <Routes
                // Asignar los callbacks de cambio de ruta
                onStart={handleRouteChangeStart}
              >
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Routes>
            )}

            <CookieNotice />
          </div>

          <Advertisement />

          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
