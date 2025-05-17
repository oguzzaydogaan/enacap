import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CoinCard from "../components/CoinCard";

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://13.60.59.104:5000/api/coins");
      const data = await res.json();
      setCoins(data);
    })();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center bg-white h-64 mb-5 text-center">
        <h1 className="text-3xl font-bold text-blue-500">
          Track the world's top cryptocurrencies in real-time and dive into
          detailed market insights with Enacap.
        </h1>
      </div>
      <div className="flex justify-center items-center mb-5">
        <h1 className="text-4xl font-bold text-blue-500">Cryptocurrency</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:px-5 lg:px-24 xl:px-72 gap-4">
        {coins.map((coin) => (
          <CoinCard
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
