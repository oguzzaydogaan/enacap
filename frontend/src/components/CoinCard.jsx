import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, symbol, price }) => {
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <h2 className="text-2xl text-blue-500 font-bold">{name}</h2>
      <h3 className="text-blue-300 text-base mt-[-10px] mb-2">{symbol}</h3>
      <Link
        to={id + "/" + symbol}
        className="bg-blue-500 rounded-full py-2 px-10 text-white inline-block"
      >
        Details
      </Link>
    </div>
  );
};

export default CoinCard;
