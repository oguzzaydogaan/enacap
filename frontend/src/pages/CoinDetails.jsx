import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const [coinDetails, setCoinDetails] = useState({});
  const { symbol } = useParams();
  useEffect(() => {
    const fetchCoinDetails = async () => {
      const response = await fetch(
        `http://13.60.59.104:5000/api/coins/${symbol}`
      );
      const data = await response.json();
      setCoinDetails(data);
    };
    fetchCoinDetails();
  }, [symbol]);
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <h1 className="text-4xl font-bold text-blue-500">Details</h1>
      </div>
      <div className="grid grid-cols-1 p-2 md:px-5 lg:px-24 xl:px-72">
        <div className="bg-white shadow rounded-lg p-2 text-center">
          <h2 className="text-2xl text-blue-500 font-bold">
            {coinDetails.name}
          </h2>
          <h3 className="text-blue-300 text-base mt-[-10px] mb-2">
            {coinDetails.symbol}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            repellendus explicabo nulla est quo nobis asperiores, labore ea
            amet! Illum, recusandae. Quae, ex vel? Tempore architecto nam
            repudiandae dolores aut?
          </p>
          <a
            href={
              "https://www.binance.com/en/trade/" +
              coinDetails.symbol +
              "?type=spot"
            }
            className="bg-blue-500 text-white rounded-full inline-block py-2 px-10 mt-2"
          >
            {Number(coinDetails.price).toFixed(2)} $
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
