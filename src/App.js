import "./App.css";
import logo from "./assets/images/logo-teal.svg";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  console.log(data);
  console.log(isLoading);

  return (
    <div className="App">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div>
          <header>
            <Header image={logo} />
          </header>
          <main className="main">
            <Restaurant
              image={data.restaurant.picture}
              name={data.restaurant.name}
              description={data.restaurant.description}
            />

            <section></section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
