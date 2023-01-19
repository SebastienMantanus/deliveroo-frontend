import "./App.css";
import logo from "./assets/images/logo-teal.svg";
import panier from "./assets/images/panier.png";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--vqtmsgjlf7qx.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div>
          <header>
            <div>
              <Header image={logo} />
            </div>
          </header>
          <main>
            <section className="main">
              <Restaurant
                image={data.restaurant.picture}
                name={data.restaurant.name}
                description={data.restaurant.description}
              />
            </section>
            <section className="menu">
              <div className="menuSections">
                <Menu
                  catArray={data.categories}
                  basket={basket}
                  setBasket={setBasket}
                />
                <img className="panier" src={panier} alt="Panier"></img>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
